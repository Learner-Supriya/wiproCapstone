package com.wipro.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.model.Wishlist;
import com.wipro.capstone.repository.WishlistRepository;

@RestController
@RequestMapping(value="wishlist")
@CrossOrigin(origins = "http://localhost:4200")
public class WishlistController {

	@Autowired
	private WishlistRepository wrepo;
	
	@GetMapping(value="get/{email}")
	List<Wishlist> getWishlist(@PathVariable String email)
	{
		return wrepo.findByEmail(email);	
	}
	
	@PostMapping(value="/add/{email}")
	Wishlist add(@PathVariable String email, @RequestBody Wishlist w) 
	{
		w.email=email;
	wrepo.save(w);
	return w;
	}
	
	@PostMapping(value="remove/{email}")
	boolean remove(@PathVariable String email,@RequestBody Wishlist w) {
		wrepo.deleteByProductIdAndEmail(w.getProductId(),email);
		return true;
	}
	
}
