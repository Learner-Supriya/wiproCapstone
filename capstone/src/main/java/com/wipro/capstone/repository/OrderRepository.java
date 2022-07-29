package com.wipro.capstone.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.model.Orders;

@Repository

public interface OrderRepository extends JpaRepository<Orders, Long> {
	
	
	@Query(value="select * from orders where created_date between ?1 and ?2",
			nativeQuery=true)
	List<Orders> getProfits(LocalDate d1, LocalDate d2);
	
	
}
