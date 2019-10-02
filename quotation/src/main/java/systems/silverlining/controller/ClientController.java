package systems.silverlining.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import systems.silverlining.model.Client;
import systems.silverlining.service.ClientService;

@RestController
@RequestMapping("/client") 
@CrossOrigin(origins = "*")
public class ClientController {

	@Autowired
	ClientService clientService;

	@PostMapping("/create")
	public Client registerClient(@RequestBody Client client) {
		System.out.println("inside registerClient>>>>>>>>>>");
		Client clientObj = clientService.registerClient(client);
		return clientObj;
	}

	@GetMapping("/list")
	public List<Client> getAllClient() {
		return clientService.getAllClient();
	}

	@GetMapping("/list/email/{email}/")
	public List<Client> getClientByEmail(@PathVariable(value = "email") String email) {
		return clientService.getClientByEmail(email);
	}

	@GetMapping("/list/id/{id}")
	public Client getClientById(@PathVariable(value = "id") Long id) {
		return clientService.getClientById(id).get();
	}

	@DeleteMapping("/delete/id/{id}")
	public void deleteClientById(@PathVariable(value = "id") Long id) {
		String status=clientService.deleteClient(id);
		if(!status.equalsIgnoreCase("success")) {
			throw new DataIntegrityViolationException(status);
		}
	}
	
	/*
	 * @PutMapping("/update/id/{id}") public Client updateClient(@PathVariable(value
	 * = "id") Long id,@RequestBody Client client) { return
	 * clientService.updateClient(client);
	 * 
	 * }
	 */
}
