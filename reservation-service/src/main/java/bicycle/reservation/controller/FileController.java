package bicycle.reservation.controller;

import bicycle.common.utils.FileUtil;
import bicycle.reservation.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/file")
public class FileController {

    private FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/img")
    public void getImage(@RequestParam(name="file_id") Integer fileId, HttpServletResponse response){
        FileUtil fileUtil = new FileUtil();
        fileUtil.makeFileResponse(fileService.getFileByFileId(fileId), response);
    }


}
