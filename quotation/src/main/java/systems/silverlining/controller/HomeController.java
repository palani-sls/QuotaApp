package systems.silverlining.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import systems.silverlining.model.Client;
import systems.silverlining.service.ClientService;

@Controller
public class HomeController {
	
	@Autowired
	ClientService clientService;
	
	@RequestMapping("/home")
	public String home() {
		System.out.println("inside here");
		return "Index";
	}
	

	@RequestMapping(value="/testclient/register", method = RequestMethod.POST)	
	public String registerClient(@RequestBody Client client){
		System.out.println("inside registerClient>>>>>>>>>>");
		clientService.registerClient(client);
		//return "MainQ";
		return "redirect:/quotation";
		
	}
	
	@GetMapping("/testclient/email/{email}")
	@ResponseBody
	public List<Client> getClient(@PathVariable String email) {
		List<Client> client =clientService.getClientByEmail(email);
		return client;
	}

	@GetMapping("/testclient/email/{email}/quotid/{quotationId}")
	@ResponseBody
	public List<Client> getClient(@PathVariable String email,@PathVariable String quotationId) {
		List<Client> client =clientService.getClientByEmail(email);
		return client;
	}
	/*
	 * @RequestMapping("/quotation/create") public String quotation() {
	 * System.out.println("inside here"); return "Index"; }
	 */

}
