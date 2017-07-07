package ksc.test;

import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import junit.framework.Assert;
import ksc.reservation.config.RootApplicationContextConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootApplicationContextConfig.class)
public class dbConnectionTest {

	@Autowired
	DataSource dataSource;
	
	@Test
	public void test() throws Exception{
		Connection connection = dataSource.getConnection();
		Assert.assertNotNull(connection);
	}

}
