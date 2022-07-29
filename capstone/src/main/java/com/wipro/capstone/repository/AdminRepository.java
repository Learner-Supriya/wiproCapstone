package com.wipro.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String>{
	Admin findByEmail(String email);

}
