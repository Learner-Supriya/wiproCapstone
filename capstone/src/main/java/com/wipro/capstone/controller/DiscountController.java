package com.wipro.capstone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.model.Discount;
import com.wipro.capstone.model.Products;
import com.wipro.capstone.service.DiscountService;

@RestController
@RequestMapping("/discount")
@CrossOrigin(origins = "http://localhost:4200")
public class DiscountController {
	
	@Autowired
	DiscountService discountService;
	
	@GetMapping(value = "getAllDiscounts",
			produces = MediaType.APPLICATION_JSON_VALUE)
			public List<Discount> getAllDiscountInfo() {
				return discountService.getAllDiscounts();
			}
	
	@PostMapping(value = "storeDiscount",
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeDiscount(@RequestBody Discount discount) {
				return discountService.storeDiscount(discount);
	}
	
	@DeleteMapping(value = "deleteDiscount/{discountCode}")
	public String deleteDiscount(@PathVariable("discountCode") String discountCode) {
					return discountService.deleteProduct(discountCode);
	}
	
	@GetMapping(value="getAmount/{code}")
	public float getAmount(@PathVariable("code") String discountCode) {
		return discountService.getAmount(discountCode);
	}
	
	@GetMapping(value="userDiscount",produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Discount> getUserDiscount(){
		return discountService.getOffer();
	}
	
	@GetMapping(value="getUserDiscount/{email}",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Discount> getUserDiscount(@PathVariable("email") String email){
		return discountService.getUserDiscount(email);
	}

}
