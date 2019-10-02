package systems.silverlining;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
@Configuration
@EnableAutoConfiguration  // Sprint Boot Auto Configuration
public class QuotationApplication {

	 public static void main(String[] args) {
	  SpringApplication.run(QuotationApplication.class, args); }
	 
	
} 
