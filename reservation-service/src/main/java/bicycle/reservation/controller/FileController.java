package bicycle.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/file")
public class FileController {

    @GetMapping("/img")
    public void getImage(@RequestParam(name="file_id") Integer fileId){

    }

}
