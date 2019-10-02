package systems.silverlining.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import systems.silverlining.util.QuotationIdGenerator;


/**
 * The persistent class for the quotation database table.
 * 
 */
@Entity
@NamedQuery(name="Quotation.findAll", query="SELECT q FROM Quotation q")
public class Quotation implements Serializable {

	private static final long serialVersionUID = 4405584493019927767L;

	@Id
	@GeneratedValue(generator = "generator", strategy = GenerationType.IDENTITY)
	@GenericGenerator(name = "generator", strategy = "systems.silverlining.util.QuotationIdGenerator", parameters = {
			@Parameter(name = QuotationIdGenerator.INCREMENT_PARAM, value = "50"),
			@Parameter(name = QuotationIdGenerator.VALUE_PREFIX_PARAMETER, value = "Q-"),
			@Parameter(name = QuotationIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	private String id;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd hh:mm")
	@CreationTimestamp
	@Column(name = "created_date")
	private Date created;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd hh:mm")
	@UpdateTimestamp
	@Column(name = "updated_date")
	private Date updated;

	private Timestamp expiry;

	@Column(name = "client_id")
	private Long clientId;

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	@OneToMany(mappedBy = "quotation", cascade = CascadeType.ALL)
	private List<QuotationDetail> quotationDetails;

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	public Quotation() {
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getCreated() {
		return this.created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Timestamp getExpiry() {
		return this.expiry;
	}

	public void setExpiry(Timestamp expiry) {
		this.expiry = expiry;
	}

	public List<QuotationDetail> getQuotationDetails() {
		return this.quotationDetails;
	}

	public void setQuotationDetails(List<QuotationDetail> quotationDetails) {
		this.quotationDetails = quotationDetails;
		this.quotationDetails.stream().forEach((q) -> q.setQuotation(this));

	}



}