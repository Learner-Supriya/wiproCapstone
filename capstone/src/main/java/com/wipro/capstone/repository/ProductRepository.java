package com.wipro.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.model.Products;

@Repository
public interface ProductRepository extends JpaRepository<Products, String> {
	
	/*@Query("select p from Products p where p.product_price > :price")
	public List<Products> getProductByPrice(@Param("price") float price);*/

}
