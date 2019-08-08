package com.Ibt.acart.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
public class User_cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long user_cart_id;
	@OneToMany(targetEntity=Products.class, mappedBy="user_cart_id",fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Products> products;
	Long user_id;
	Long seller_id;
	int quantity;
	public User_cart() {

	}
	public User_cart(Long user_cart_id, List<Products> products, Long user_id, Long seller_id, int quantity) {
		super();
		this.user_cart_id = user_cart_id;
		this.products = products;
		this.user_id = user_id;
		this.seller_id = seller_id;
		this.quantity = quantity;
	}
	public Long getUser_cart_id() {
		return user_cart_id;
	}
	public void setUser_cart_id(Long user_cart_id) {
		this.user_cart_id = user_cart_id;
	}
	public List<Products> getProducts() {
		return products;
	}
	public void setProducts(List<Products> products) {
		this.products = products;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public Long getSeller_id() {
		return seller_id;
	}
	public void setSeller_id(Long seller_id) {
		this.seller_id = seller_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
