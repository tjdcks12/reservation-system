package bicycle.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class SSLController {

    @GetMapping(".well-known/acme-challenge/67qcjdILqz8VR3BNDNX08Psig1uACLQ1yU_a3GR8FRY")
    public String sslResponse(){

        
        return "ssl";
    }

}
