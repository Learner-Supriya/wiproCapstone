package com.wipro.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.model.Products;
import com.wipro.capstone.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	//get allproducts
	public List<Products> getAllProducts() {
		return productRepository.findAll();
	}
	
//store
	public String storeProduct(Products product) {
		if (productRepository.existsById(product.getProductId())) {
			return "Product Id Should Be Unique";
		} else {
			productRepository.save(product);
			return "Product Stored Successfully";
		}
	}
	
	//update
	public String updateProductPrice(Products product) {
		if (productRepository.existsById(product.getProductId())) {
			Products pp = productRepository.getById(product.getProductId());
			pp.setProductCategory(product.getProductCategory());
			pp.setProductName(product.getProductName());
			pp.setProductPrice(product.getProductPrice());
			pp.setUrl(product.getUrl());
			pp.setStocks(product.getStocks());
			productRepository.saveAndFlush(pp);
			return "Product Price Updated Successfully";
			
		} else {
			return "No product Found";
		}
	}
	
	//delete
	public String deleteProduct(String productId) {
		if (!productRepository.existsById(productId)) {
			return "Product  Details Not Present";
		} else {
			productRepository.deleteById(productId);
			return "Product Deleted Successfully";
		}
	}
	/*public List<Products> findProductUsingPrice(float price) {
		return productRepository.getProductByPrice(price);
	}*/
}
