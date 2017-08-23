package bicycle.reservation.controller;

import bicycle.common.utils.UsersUtil;
import bicycle.reservation.model.domain.User;
import bicycle.reservation.service.UserService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Date;
import java.util.Map;

@Controller
@RequestMapping("/login")
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    // 프로퍼티는 static으로는 읽을 수 없다
    @Value("${naver.login.callback.url}")
    private String CALLBACK_URL;

    @Value("${naver.login.client.id}")
    private String NAVER_OAUTH_CLIENT_ID;

    @Value("${naver.login.client.secret}")
    private String NAVER_OAUTH_CLIENT_SECRET;

    private static final String USER_PROFILE_URL = "https://openapi.naver.com/v1/nid/me";

    @Autowired
    UserService userService;

    private String getAccessUrl(String state, String code) {
        String accessUrl = "https://nid.naver.com/oauth2.0/token?client_id=" + NAVER_OAUTH_CLIENT_ID + "&client_secret="
                + NAVER_OAUTH_CLIENT_SECRET + "&grant_type=authorization_code" + "&state=" + state + "&code=" + code;
        return accessUrl;
    }

    @GetMapping
    public String login(HttpServletRequest request) {
        logger.info("==============Login 시작==============");
        SecureRandom random = new SecureRandom();
        String state = new BigInteger(130, random).toString(32);
        request.getSession().setAttribute("state", state);
        String REQUEST_URL = "https://nid.naver.com/oauth2.0/authorize?client_id=" + NAVER_OAUTH_CLIENT_ID
                + "&response_type=code&redirect_uri=" + CALLBACK_URL + "&state=" + state;
        return "redirect:" + REQUEST_URL;
    }

    @GetMapping("/oauth2callback")
    public String oauth2Callback(@RequestParam String state, @RequestParam String code, HttpServletRequest request)
            throws UnsupportedEncodingException {
        logger.info("==============Login Callback 시작==============");
        String storedState = (String) request.getSession().getAttribute("state"); // 세션에
        if (!state.equals(storedState)) {
            logger.error("==============세션 State 불일치==============");
            // 세션에 저장된 토큰과 인증을 요청해서 받은 토큰이 일치하는지 검증
            // System.out.println("401 unauthorized"); // 인증이 실패했을 때의 처리 부분입니다.
            return "redirect:/";
        }
        // 성공한 부분

        String data = UsersUtil.getHtml(getAccessUrl(state, code), null);
        Map<String, String> map = UsersUtil.JSONStringToMap(data);
        String accessToken = map.get("access_token");
        String tokenType = map.get("token_type");
        String profileData = UsersUtil.getHtml(USER_PROFILE_URL, tokenType + " " + accessToken);
        // tokentype 와 accessToken을 조합한 값을 해더의 Authorization에 넣어 전송합니다. 결과 값은
        // xml로 출력됩니다.
        JSONParser jsonParser = new JSONParser();
        JSONObject responseData = null;
        try {
            responseData = (JSONObject) jsonParser.parse(profileData);
        } catch (ParseException e) {
            logger.error("==============JsonParser 오류==============");
            e.printStackTrace();
        }
        Map<String, String> userMap = UsersUtil.JSONStringToMap(responseData.get("response").toString());
        StringBuffer returnUrl = (StringBuffer) request.getSession().getAttribute("returnUrl");
        if (userService.getUserBySnsId(userMap.get("id")) != null) {
            request.getSession().invalidate();
            request.getSession().setAttribute("user", userService.getUserBySnsId(userMap.get("id")));
            logger.info("==============User 로그인 성공==============");
            return "redirect:" + returnUrl;
        } else {
            User user = new User();
            user.setEmail(userMap.get("email"));
            user.setCreateDate(new Date());
            user.setSnsId(userMap.get("id"));
            user.setUsername(userMap.get("name"));
            user.setNickname(userMap.get("nickname"));
            user.setAdminFlag(0);
            userService.addUser(user);
            logger.info("==============User : " + user.getSnsId() + " 생성==============");
            return "redirect:" + returnUrl;
        }
    }
}
