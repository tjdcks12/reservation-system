package bicycle.reservation.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

//최상위에 존재 어디에서도 사용가능..
@Configuration
@ComponentScan(basePackages = {"bicycle.reservation.dao", "bicycle.reservation.service"})
@Import({DbConfig.class})
public class RootApplicationContextConfig {
}
