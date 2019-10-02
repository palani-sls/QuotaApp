package systems.silverlining.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import systems.silverlining.model.Quotation;


@Repository
public interface QuotationRepository extends CrudRepository<Quotation, String> {
	
	List<Quotation> findAll();
	

	

}
