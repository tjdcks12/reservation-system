package kr.or.connect.reservation.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Configuration
//@PropertySource("classpath:/application.properties")
@ComponentScan(basePackages = "kr.or.connect.reservation.controller")
public class ServiceContextConfig extends WebMvcConfigurerAdapter{
    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    @Value("${spring.resources.static-locations}")
    String staticResourcesLocation;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        System.out.println(staticResourcesLocation);
        registry.addResourceHandler("/resources/**").addResourceLocations(staticResourcesLocation);  //   webapp/resources 경로를 의미
    }
}
