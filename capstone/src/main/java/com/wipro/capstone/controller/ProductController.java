package com.wipro.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.model.Products;
import com.wipro.capstone.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping(value = "getAllProduct",
	produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Products> getAllProductInfo() {
		return productService.getAllProducts();
	}
	@PostMapping(value = "storeProduct",
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeProduct(@RequestBody Products product) {
				return productService.storeProduct(product);
	}
	
	@DeleteMapping(value = "deleteProduct/{productId}")
	public String storeProductInfo(@PathVariable("productId") String productId) {
					return productService.deleteProduct(productId);
	}
	
	@PatchMapping(value = "updateProduct")
	public String updateProductPrice(@RequestBody Products product) {
					return productService.updateProductPrice(product);
	}
	
	
	/*@GetMapping(value = "findProdutByPrice/{price}")
	public List<Products> findProductByPrice(@PathVariable("price") float price) {
		return productService.findProductUsingPrice(price);
	}
*/

}
