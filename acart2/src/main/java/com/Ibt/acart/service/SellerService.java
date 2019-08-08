package com.Ibt.acart.service;

import java.util.List;

import com.Ibt.acart.model.Seller;
import com.Ibt.acart.model.User;

public interface SellerService {

	List<Seller> sellerList();
	Seller findOne(Long id) throws AcartServiceException;
	void addSeller(Seller seller);
	String deleteSeller(Long id);
	String updateSeller(Long id, Seller seller);
	Seller login(Seller seller);
	
	
	
}
