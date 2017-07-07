package ksc.reservation.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = { "ksc.reservation.dao", "ksc.reservation.service" })
@Import({DbConfig.class})
public class RootApplicationContextConfig {

}
