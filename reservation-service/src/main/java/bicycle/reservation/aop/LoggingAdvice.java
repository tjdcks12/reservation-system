package bicycle.reservation.aop;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
public class LoggingAdvice {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAdvice.class);

    @Before("execution(* bicycle.reservation.service.*.*(..)) || " +
            "execution(* bicycle.reservation.controller.*.*(..)) || " +
            "execution(* bicycle.reservation.dao.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        logger.info("\n=============" + joinPoint.getTarget().getClass()+ " : "+
                joinPoint.getSignature().getName() + "() is running =============");
    }

    @AfterReturning("execution(* bicycle.reservation.service.*.*(..)) || " +
            "execution(* bicycle.reservation.controller.*.*(..)) || " +
            "execution(* bicycle.reservation.dao.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        logger.info("\n=============" + joinPoint.getTarget().getClass()+ " : " +
                joinPoint.getSignature().getName() + "() is over =============");
    }

    @AfterThrowing(pointcut = "execution(* bicycle.reservation.service.*.*(..)) || " +
            "execution(* bicycle.reservation.controller.*.*(..)) || " +
            "execution(* bicycle.reservation.dao.*.*(..))", throwing = "exception")
    public void logAfterThrowing(JoinPoint joinPoint, Exception exception) {
        logger.error("\n=============" + joinPoint.getTarget().getClass()+ " : " +
                joinPoint.getSignature().getName() + "() is something wrong =============");
        logger.error("\n=============error message : " + exception.getCause().getMessage() + "=============");
    }
}
