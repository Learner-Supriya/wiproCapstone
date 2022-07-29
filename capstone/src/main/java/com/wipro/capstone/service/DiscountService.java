package com.wipro.capstone.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.model.Discount;
import com.wipro.capstone.repository.DiscountRepository;

@Service
public class DiscountService {
	@Autowired
	DiscountRepository discRepo;
	
	public List<Discount> getAllDiscounts() {
		return discRepo.findAll();
	}
	
	public String storeDiscount(Discount discount) {
		if (discRepo.existsById(discount.getDiscountCode())) {
			return "Coupon Code Should Be Unique";
		} else {
			discRepo.save(discount);
			return "Discount Stored Successfully";
		}
	}
	
	public String deleteProduct(String discountCode) {
		if (!discRepo.existsById(discountCode)) {
			return "Discount  Details Not Present";
		} else {
			discRepo.deleteById(discountCode);
			return "Discount Deleted Successfully";
		}
	}
	
	public float getAmount(String discountCode) {
		if (!discRepo.existsById(discountCode)) {
			return 0;
		} else {
			
			return discRepo.getById(discountCode).getDiscountAmount();
		}
	}
	public List<String> getAllCodes(){
		return discRepo.getCodes();
	}
	
	public Optional<Discount> getOffer(){
		int offerCode=new Random().nextInt(getAllCodes().size());
		System.out.println(offerCode);
		return discRepo.findById(getAllCodes().get(offerCode));
	}

	public List<Discount> getUserDiscount(String email) {
		// TODO Auto-generated method stub
		return discRepo.getByEmail(email);
	}
	
	

}
