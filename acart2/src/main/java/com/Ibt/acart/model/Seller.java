package com.Ibt.acart.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
public class Seller {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long seller_id;
	String seller_name;
	String mail_id;
	String password;
	public String getSeller_name() {
		return seller_name;
	}

	public void setSeller_name(String seller_name) {
		this.seller_name = seller_name;
	}

	public String getMail_id() {
		return mail_id;
	}

	public void setMail_id(String mail_id) {
		this.mail_id = mail_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(Long seller_id) {
		this.seller_id = seller_id;
	}
	@OneToMany(targetEntity=Products.class, mappedBy="seller_id",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Products> products;

	public List<Products> getProducts() {
		return products;
	}

	public Seller(Long seller_id, List<Products> products) {
		super();
		this.seller_id = seller_id;
		this.products = products;
	}

	public Seller() {

	}
	public void setProducts(List<Products> products) {
		this.products = products;
	}
	
	

}
