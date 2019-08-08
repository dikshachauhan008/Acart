package com.Ibt.acart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ibt.acart.model.Seller;
import com.Ibt.acart.service.AcartServiceException;
import com.Ibt.acart.service.SellerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/seller")
public class SellerController {
	
	@Autowired
	private SellerService sellerservice;
	@GetMapping("/all")
	public List<Seller> sellerList()
	{
		return sellerservice.sellerList();
	}
	
	@GetMapping("/{id}")
	public Seller findOne(@PathVariable Long id) throws AcartServiceException
	{
			return sellerservice.findOne(id);
	}
	@PostMapping("/add")
	public void addSeller(@RequestBody Seller seller)
	{
		sellerservice.addSeller(seller);
	}
	@DeleteMapping("/{id}")
	public String deleteSeller(@PathVariable Long id)
	{
		return sellerservice.deleteSeller(id);
	}
	
	@PutMapping("/{id}")
	public String updateSeller(@PathVariable Long id, @RequestBody Seller seller)
	{
		return sellerservice.updateSeller(id, seller);
	}
	@PutMapping("/login")
	public Seller login(@RequestBody Seller seller) {
    return sellerservice.login(seller);
	}
}
