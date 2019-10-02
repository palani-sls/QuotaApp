package systems.silverlining.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import systems.silverlining.model.Client;
import systems.silverlining.service.ClientService;
import systems.silverlining.service.RecaptchaService;

@Controller
@CrossOrigin(origins = "*")
public class LoginController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	ClientService clientService; 

	@Autowired
	RecaptchaService captchaService;

	@GetMapping("/login")
	public String login() {
		System.out.println("inside login controller");
		return "login";
	}

	@PostMapping("/login")
	@ResponseBody
	public Client validateClient(HttpServletRequest request, @RequestBody Map<String, Object> payload) {
		logger.debug("inside login controller");
		String recaptchaResponse = (String) payload.get("recaptcha");
		String email = (String) payload.get("email");// request.getParameter("email");
		String referenceid = (String) payload.get("referenceid");// request.getParameter("referenceid");
		logger.debug("email:" + email + " referenceid:" + referenceid);
		logger.debug("recaptchaResponse" + recaptchaResponse);
		String ip = request.getRemoteAddr();
		String captchaVerifyMessage = captchaService.verifyRecaptcha(ip, recaptchaResponse);
		logger.debug("captchaVerifyMessage>>>>>>>>>" + captchaVerifyMessage);
		Client client = clientService.validateClient(referenceid, email);
		if (client != null)
			return client;
		
		else
			throw new RuntimeException("Invliad Data");

	}

	@GetMapping("/login/email/{email}/quotid/{quotationId}")
	@ResponseBody
	public Client validateData(@PathVariable String email, @PathVariable String quotationId) {
		Client client = clientService.validateClient(quotationId, email);
		if (client != null)
			return client;
		else
			throw new DataIntegrityViolationException("Invalid Data");

	}

	@GetMapping("/quotation")
	public String quotation() {
		System.out.println("inside login controller");

		return "flavor";
	}
}
