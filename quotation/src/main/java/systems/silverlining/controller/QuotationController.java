package systems.silverlining.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import systems.silverlining.model.Quotation;
import systems.silverlining.service.QuotationService;

@RestController
@RequestMapping("/quotation") 
public class QuotationController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	QuotationService quotationService;	
	
	
	@PostMapping("/create")
	public Quotation createQuotation(@RequestBody Quotation quotation){	
		System.out.println("quotation"+quotation);
		return quotationService.createQuotation(quotation);
	}
	
	@GetMapping(value="/list")	
	public List<Quotation> getQuotation(){
		return quotationService.getAllQuoation();			
	}
	
	/*
	 * @GetMapping("/list/email/{email}/quotid/{quotationId}") public Quotation
	 * validateData(@PathVariable String email,@PathVariable String quotationId) {
	 * Optional<Quotation> quotation
	 * =quotationService.getQuotationById(quotationId); if (quotation.isPresent()) {
	 * String emailfromDb=quotation.get().getClient().getClientEmail();
	 * if(emailfromDb != null && email != null && email.equals(emailfromDb)) return
	 * quotation.get(); else throw new
	 * DataIntegrityViolationException("Email match not found");
	 * 
	 * }else { throw new DataIntegrityViolationException("Quotation Id not found");
	 * }
	 * 
	 * }
	 */
	
	@GetMapping(value="/list/quotid/{quotationId}")	
	public Quotation getQuotationById(@PathVariable String quotationId){
		logger.debug("Inside getQuotationById:quotationId="+quotationId);
		Optional<Quotation> quotation =quotationService.getQuotationById(quotationId);	
		return quotation.get();
	}

}
