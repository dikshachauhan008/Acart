package com.Ibt.acart.repository;

import org.springframework.stereotype.Repository;

import com.Ibt.acart.model.Seller;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface SellerRepository extends CrudRepository<Seller,Long>{

}
