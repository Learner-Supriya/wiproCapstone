package com.wipro.capstone.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.model.Wishlist;
@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, String> {
	
	
	List<Wishlist> findByEmail(String email);
	
	
	@Transactional
	void deleteByProductIdAndEmail(String productId,String email);
}