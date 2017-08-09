package bicycle.reservation.config;

import org.springframework.context.annotation.*;

//최상위에 존재 어디에서도 사용가능..
@Configuration
@ComponentScan(basePackages = {"bicycle.reservation.dao", "bicycle.reservation.service"})
@PropertySources({
        @PropertySource("classpath:/database.properties"),
        @PropertySource("classpath:/application.properties")
})
@Import({DbConfig.class})
public class RootApplicationContextConfig {
}
