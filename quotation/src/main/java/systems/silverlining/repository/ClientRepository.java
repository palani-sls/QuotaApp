package systems.silverlining.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import systems.silverlining.model.Client;


@Repository
public interface ClientRepository  extends CrudRepository<Client, Long>{
	
	public List<Client> findByClientEmail(String clientEmail);
	
	public List<Client> findAll();
	
	
    @Query("select c from Client c, Quotation q where q.id=?1 and c.id=q.clientId and c.clientEmail=?2")
    Client validateClient(String quotationId, String email);


}
