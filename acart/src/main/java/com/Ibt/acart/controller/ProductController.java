package com.Ibt.acart.controller;

import java.io.IOException;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Ibt.acart.model.Products;
import com.Ibt.acart.service.ProductService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService productService;
	@GetMapping("/all")
	public List<Products> productList()
	{
		return productService.productList();
	}
	@GetMapping("/{id}")
	public Products findOne(@PathVariable Long id)
	{
		return productService.findOne(id);
	}
	@PostMapping(value="/saveProduct")
	public void saveProduct(@RequestParam("file") MultipartFile file, @RequestParam("product") String product) throws JsonParseException, JsonMappingException, IOException {
		Products product1= new ObjectMapper().readValue(product, Products.class);
		product1.setLogo(file.getBytes());
		product1.setFile_name(file.getOriginalFilename());
		product1.setLast_Updated_date(new Date());
		 productService.addProduct(product1);
		
	}
	@DeleteMapping("/delete/{id}")
	public String deleteProduct(@PathVariable Long id)
	{
		return productService.deleteProduct(id);
	}
	@PutMapping("/{id1}")
	public void updateProduct(@PathVariable Long id1,@RequestBody Products product)
	{
		productService.updateProduct(id1,product);
	}
	@GetMapping("category/{id}")
	public List<Products> productListbyCategory(@PathVariable Long id)
	{
		return productService.productListbyCategory(id);
	}
}
