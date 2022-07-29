package com.wipro.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.capstone.model.Cart;

public interface CartRepository  {
	
	public interface AdminDao extends JpaRepository<Cart, String> {
	}

}
