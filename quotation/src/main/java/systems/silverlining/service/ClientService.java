package systems.silverlining.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import systems.silverlining.model.Client;
import systems.silverlining.repository.ClientRepository;


@Service
public class ClientService {
	
	@Autowired
	ClientRepository clientRepository;
	
	public Client registerClient(Client clinet) {
		return clientRepository.save(clinet);
	}

	public List<Client> getClientByEmail(String email) {
		return clientRepository.findByClientEmail(email);
	}
	
		
	public Optional<Client> getClientById(Long clientId) {
		return clientRepository.findById(clientId);
	}
	
	public List<Client> getAllClient(){
		return clientRepository.findAll();
	}
	
	public String deleteClient(Long clientId){
		Optional<Client> client=clientRepository.findById(clientId);
		if(client.isPresent()) {
			Client clientObj=client.get();
			clientObj.setStatus("D");			
			clientRepository.save(clientObj);
			return "success";
		}else {
			return "Client Id not found";
		}
		
			
	}
	
	public Client  validateClient(String quotationId,String email) {
		Client client=clientRepository.validateClient(quotationId,email);
		System.out.println("clinet >>>>>>"+client);
		return client;
		
	}
	
	public Client updateClient(Long id,Client client){
		
		
		return clientRepository.save(client);	 
	}
}
