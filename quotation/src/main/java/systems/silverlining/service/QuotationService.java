package systems.silverlining.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import systems.silverlining.model.Quotation;
import systems.silverlining.repository.QuotationRepository;

@Service
public class QuotationService {
	
	@Autowired
	QuotationRepository quotationRepository;
	
	public Quotation createQuotation(Quotation quotation) {
		return quotationRepository.save(quotation);
		
	}
	
	public Optional<Quotation> getQuotationById(String quotationId) {
		return quotationRepository.findById(quotationId);
	}
	
	public List<Quotation> getAllQuoation() {
		return quotationRepository.findAll();
	}
	
}
