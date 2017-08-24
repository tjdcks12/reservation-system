package bicycle.reservation.controller;


import bicycle.reservation.model.domain.User;
import bicycle.reservation.model.dto.BookedListDto;
import bicycle.reservation.model.dto.CommentRegisterFormDto;
import bicycle.reservation.service.CommentService;
import bicycle.reservation.service.FileService;
import bicycle.reservation.service.ReservationInfoService;
import bicycle.reservation.service.UserService;
import org.owasp.esapi.ESAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

//임시 컨트롤러, 나중에 수정 필요
@Controller
@RequestMapping("/review")
public class ReviewController {
    private static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

    @Value("${app.file.basedir}")
    private String baseUrl;

    CommentService commentService;
    UserService userService;
    ReservationInfoService reservationInfoService;
    FileService fileService;

    @Autowired
    public ReviewController(UserService userService, ReservationInfoService reservationInfoService, FileService fileService ){
        this.commentService = commentService;
        this.userService = userService;
        this.reservationInfoService = reservationInfoService;
        this.fileService = fileService;
    }

    @GetMapping
    public String review(HttpServletRequest request) {
        return "review";
    }

    @GetMapping("/write")
        public String reviewWrite(@RequestParam(name = "bookingNumber") Integer bookingNumber, HttpServletRequest request)
            throws Exception {

//            User user = (User) request.getSession().getAttribute("user");
            BookedListDto bookedList = reservationInfoService.getBookedListByBookingNumber(bookingNumber);
//			if (bookedList.getUserId().longValue() == user.getId().longValue() && bookedList.getCommentId() == null) {
//            if (bookedList.getUserId().longValue() == user.getId().longValue()) {
//                request.setAttribute("user", user);
                request.setAttribute("bookedList", bookedList);
                return "reviewWrite";
//            } else {
//                throw new Exception();
//            }

    }

    @PostMapping
    public String create(@ModelAttribute CommentRegisterFormDto commentForm,
                         @RequestParam("file") MultipartFile[] files) {
        String comment = ESAPI.encoder().canonicalize(commentForm.getComment());
        commentForm.setComment(ESAPI.encoder().encodeForHTML(comment));
        logger.info("==============Comment 생성 로딩 시작==============");
        ArrayList<bicycle.reservation.model.domain.File> images = new ArrayList<>();
        String baseDir = baseUrl;
        logger.info("==============Comment 이미지 저장 시작==============");
        if (files != null && files.length > 0) {

            // windows 사용자라면 "c:\boost\storage\년도\월\일" 형태의 문자열을 구한다.
            String formattedDate = baseDir
                    + new SimpleDateFormat("yyyy" + File.separator + "MM" + File.separator + "dd").format(new Date());
            File f = new File(formattedDate);
            if (!f.exists()) { // 파일이 존재하지 않는다면, 여기서는 폴더가 있는지 없는지 확인
                f.mkdirs(); // 해당 디렉토리를 만든다. 하위폴더까지 한꺼번에 만든다.
            }

            for (MultipartFile file : files) {
                if (file.isEmpty()) {
                    continue;
                }
                String contentType = file.getContentType();
                String originalFilename = file.getOriginalFilename();
                Long size = file.getSize();
                String uuid = UUID.randomUUID().toString(); // 중복될 일이 거의 없다.
                String saveFileName = formattedDate + File.separator + uuid;
                bicycle.reservation.model.domain.File reviewImage = new bicycle.reservation.model.domain.File();
                reviewImage.setUserId(commentForm.getUserId());
                reviewImage.setContentType(contentType);
                reviewImage.setFileLength(size);
                reviewImage.setFileName(originalFilename);
                reviewImage.setSaveFileName(saveFileName);
                images.add(reviewImage);
                // 실제 파일을 저장함.
                // try-with-resource 구문. close()를 할 필요가 없다. java 7 이상에서 가능
                try (InputStream in = file.getInputStream();
                     FileOutputStream fos = new FileOutputStream(saveFileName)) {
                    int readCount = 0;
                    byte[] buffer = new byte[512];
                    while ((readCount = in.read(buffer)) != -1) {
                        fos.write(buffer, 0, readCount);
                    }
                } catch (Exception e) {
                    logger.error("==============" + originalFilename + " : 이미지 생성 에러==============");
                    e.printStackTrace();
                }
            } // for
        } // if
        logger.info("==============Comment 이미지 저장 성공==============");
        fileService.addComment(commentForm, images);
        logger.info("==============Comment 저장 성공==============");
        return "redirect:/review";
    }

}
