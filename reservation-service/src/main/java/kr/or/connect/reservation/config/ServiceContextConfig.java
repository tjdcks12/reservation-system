package kr.or.connect.reservation.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.XmlViewResolver;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Configuration
@PropertySource("classpath:/application.properties")
@ComponentScan(basePackages = "kr.or.connect.reservation.controller")
public class ServiceContextConfig extends WebMvcConfigurerAdapter{
    @Bean
    public ViewResolver viewResolverJsp() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
//        viewResolver.setPrefix("/WEB-INF/views/");
//        viewResolver.setSuffix(".jsp");
        viewResolver.setPrefix("/static/html/");
        viewResolver.setSuffix(".html");
        return viewResolver;
    }

//    @Bean
//    public ViewResolver viewResolverHtml() {
//        XmlViewResolver viewResolver = new XmlViewResolver();
//        Resource resource = new ClassPathResource("view.xml");
//        viewResolver.setLocation(resource);
//        viewResolver.setOrder(1);
//        return viewResolver;
//    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Value("${spring.resources.static-locations}")
    String staticResourcesLocation;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/resources/**").addResourceLocations(staticResourcesLocation);
        registry.addResourceHandler("/static/**").addResourceLocations("/static/");
        registry.addResourceHandler("/static/js/**").addResourceLocations("files:../static/js/");
        registry.addResourceHandler("/static/html/**").addResourceLocations("files:../static/html/");
    }
}
