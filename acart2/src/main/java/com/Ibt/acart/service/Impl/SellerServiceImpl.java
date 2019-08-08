package com.Ibt.acart.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ibt.acart.model.Seller;
import com.Ibt.acart.model.User;
import com.Ibt.acart.repository.SellerRepository;
import com.Ibt.acart.service.AcartServiceException;
import com.Ibt.acart.service.SellerService;

@Service
public class SellerServiceImpl implements SellerService {

	@Autowired
	private SellerRepository sellerRepository;
	@Override
	public List<Seller> sellerList() {
		
		return (List<Seller>) sellerRepository.findAll();
	}

	@Override
	public Seller findOne(Long id) throws AcartServiceException {
		
		return sellerRepository.findOne(id);
	}

	@Override
	public void addSeller(Seller seller) {
		sellerRepository.save(seller);
		
	}


	@Override
	public String updateSeller(Long id, Seller seller) {
		sellerRepository.save(seller);
		return "Seller updated successfully";
	}

	@Override
	public String deleteSeller(Long id) {
		sellerRepository.delete(id);
		return "Seller deleted successfully";
	}

	@Override
	public Seller login(Seller seller) {
		String sellername=seller.getSeller_name();
		String password=seller.getPassword();
		List<Seller> sellers= new ArrayList <>();
		sellers.addAll((sellerList()));
		for(int i=0; i<sellers.size();i++)
		{
			if(((sellers.get(i).getSeller_name()).equals(sellername))&&((sellers.get(i).getPassword()).equals(password)))
			{
				Long selleid=sellers.get(i).getSeller_id();
				seller.setSeller_id(selleid);
				return seller;
			}
		}
		return null;
		}
	}

