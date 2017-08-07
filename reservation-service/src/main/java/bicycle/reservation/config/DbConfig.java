package bicycle.reservation.config;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@PropertySource("classpath:/database.properties")
@EnableTransactionManagement
public class DbConfig {
	private static final Logger logger = LoggerFactory.getLogger(DbConfig.class);
	@Value("${spring.datasource.driver-class-name}")
	private String driverClassName;
	@Value("${spring.datasource.username}")
	private String username;
	@Value("${spring.datasource.url}")
	private String url;
	@Value("${spring.datasource.password}")
	private String password;
	@Value("${spring.datasource.max-pool-size}")
	private int maxPoolSize;
	@Value("${spring.datasource.minimum-idle}")
	private int minimumIdle;
	@Value("${spring.datasource.max-wait-millis}")
	private int maxWaitMillis;
	@Value("${spring.datasource.max-idle}")
	private int maxIdle;
	
	@Bean
	public DataSource dataSource() {
		HikariDataSource dataSource = new HikariDataSource();
		dataSource.setDriverClassName(driverClassName);
		dataSource.setMinimumIdle(minimumIdle);
		dataSource.setMaximumPoolSize(maxPoolSize);
		dataSource.setJdbcUrl(url);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		logger.info("=========init ...... DataSource() in production mode!!=======");
		return dataSource;
	}
	

	@Bean
	public PlatformTransactionManager transctionManager(DataSource dataSource) {
		return new DataSourceTransactionManager(dataSource);
	}
}
