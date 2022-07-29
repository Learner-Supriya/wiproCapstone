package com.wipro.capstone.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.model.Discount;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, String>  {
	@Query("select d.discountCode from Discount d")
	List<String> getCodes();

	@Transactional
	List<Discount> getByEmail(String email);

}
