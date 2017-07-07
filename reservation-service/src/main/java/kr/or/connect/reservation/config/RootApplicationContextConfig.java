package kr.or.connect.reservation.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Configuration
@ComponentScan(basePackages = {
        "kr.or.connect.reservation.dao",
        "kr.or.connect.reservation.service"
})
@Import({DbConfig.class})
public class RootApplicationContextConfig {
}
