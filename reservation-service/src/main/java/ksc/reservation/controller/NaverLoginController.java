package ksc.reservation.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.scribejava.core.model.OAuth2AccessToken;

import ksc.reservation.dao.NaverLoginDao;
import ksc.reservation.domain.Users;
import ksc.reservation.naverlogin.oauth.bo.NaverLoginBO;
import ksc.reservation.service.NaverLoginService;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

@Controller
@RequestMapping
public class NaverLoginController {

	/* NaverLoginBO */
	private NaverLoginBO naverLoginBO;

	@Autowired
	private NaverLoginService naverLoginService;

	/* NaverLoginBO */
	@Autowired
	private void setNaverLoginBO(NaverLoginBO naverLoginBO) {
		this.naverLoginBO = naverLoginBO;
	}

	@GetMapping("/login")
	public String login(HttpSession session) {
		// 네아로 인증 URL을 생성하기 위하여 getAuthorizationUrl을 호출
		String naverAuthUrl = naverLoginBO.getAuthorizationUrl(session);
		if (session.getAttribute("user") == null) {
			return "redirect:" + naverAuthUrl;
		} else {
			session.invalidate();// 세션지움
			// return "redirect:reservation"; 나중엔 이걸로바꿔서 조건 거는거!
			return "redirect:/";
		}
	}

	@GetMapping("/callback")
	public String callback(@RequestParam String code, @RequestParam String state, HttpSession session)
			throws IOException, ParseException {
		OAuth2AccessToken oauthToken = naverLoginBO.getAccessToken(session, code, state);
		String apiResult = naverLoginBO.getUserProfile(oauthToken);
		// 여기 디비에 인서트 id
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonObj = (JSONObject) jsonParser.parse(apiResult);
		Map<String, String> map = new HashMap<String, String>();
		ObjectMapper mapper = new ObjectMapper();
		System.out.println(apiResult);
		try {
			map = mapper.readValue(jsonObj.get("response").toString(), new TypeReference<HashMap<String, String>>() {
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(map.get("nickname"));
		Users user = new Users();
		user.setAdmin_flag(0);
		user.setEmail(map.get("email"));
		user.setNickname(map.get("nickname"));
		user.setSns_id(map.get("id"));
		user.setSns_profile(map.get("profile_image"));
		
		if(!naverLoginService.duplicateId(Integer.parseInt(map.get("id")))){
			naverLoginService.addUser(user);
			System.out.println("디비에 등록됬습니다");
		}
		else {
			System.out.println("이미 존재하는 아이디 입니다");
		}
		
		session.setAttribute("userId", naverLoginService.getUserId(Integer.parseInt(map.get("id"))));
		session.setAttribute("user", map); // 세션에 파싱된 데이터(apiResult)들 저장
		//db에 insert 비교
		
		

		return "redirect:reservation";
	}
}
