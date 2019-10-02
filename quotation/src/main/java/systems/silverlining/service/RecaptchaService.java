package systems.silverlining.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import systems.silverlining.util.RecaptchaUtil;

import java.util.stream.Collectors;

@Service
public class RecaptchaService {
	
	@Value("${google.recaptcha.secretKey}") 
	String recaptchaSecretKey;
	
	private static final String GOOGLE_RECAPTCHA_VERIFY_URL =
			"https://www.google.com/recaptcha/api/siteverify";
	@Autowired 
	RestTemplateBuilder restTemplateBuilder;
	
	public String verifyRecaptcha(String ip, String recaptchaResponse){
		Map<String, String> body = new HashMap<>();
		body.put("secret", recaptchaSecretKey);
		body.put("response", recaptchaResponse);
		body.put("remoteip", ip);
		System.out.println("Request body for recaptcha: {}"+ body);
		ResponseEntity<Map> recaptchaResponseEntity = 
				restTemplateBuilder.build()
				.postForEntity(GOOGLE_RECAPTCHA_VERIFY_URL+
						"?secret={secret}&response={response}&remoteip={remoteip}", 
						body, Map.class, body);
		System.out.println("Response from recaptcha: {}"+ recaptchaResponseEntity.getBody());
		Map<String, Object> responseBody = recaptchaResponseEntity.getBody();
		boolean recaptchaSucess = (Boolean)responseBody.get("success");
		if ( !recaptchaSucess) {
			List<String> errorCodes = (List)responseBody.get("error-codes");
			String errorMessage = errorCodes.stream()
					.map(s -> RecaptchaUtil.RECAPTCHA_ERROR_CODE.get(s))
					.collect(Collectors.joining(", "));
			return errorMessage;
		}else {
			return null;
		}
	}

}
