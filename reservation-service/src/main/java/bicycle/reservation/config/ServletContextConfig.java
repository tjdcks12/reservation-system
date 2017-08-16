package bicycle.reservation.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.util.Properties;

@Configuration
// 자동으로 webMvcConfigurationSupport 클래스가 자동으로 빈으로 등록된다. addResourceHandlers이용.
@EnableWebMvc
// dispatcherServlet단에서 사용되는 controller를 주입받는다. RootApplication에서 dao와 service를
// 주입받은 상태이므로 controller가 의존하는것들에 대해서 사용가능하다.
@ComponentScan(basePackages = {"bicycle.reservation.controller"})
public class ServletContextConfig extends WebMvcConfigurerAdapter {

    @Value("${app.file.max.size}")
    private int maxFileSize;

    @Bean
    public ViewResolver viewResolver() {
        // 논리적인 View 이름을 사용하여 템플릿 파일 장원을 사용하여 랜더링 되는 View 객체를 결정한다.
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        // JSTL을 사용하기 위해 사용.
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    @Bean
    public MultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(maxFileSize);
        return multipartResolver;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }

//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(new LoggingHandlerInterceptor()).addPathPatterns("/booked/**")
//				.addPathPatterns("/exhibition/**/reserve");
//		registry.addInterceptor(new LoginCheckInterceptor()).addPathPatterns("/booked/**")
//				.addPathPatterns("/exhibition/**/reserve");
//		super.addInterceptors(registry);
//	}
//
//	@Override
//	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
//		argumentResolvers.add(new AuthUserWebArgumentResolver());
//	}
}
