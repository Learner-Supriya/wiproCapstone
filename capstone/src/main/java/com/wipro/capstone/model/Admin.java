package com.wipro.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity

public class Admin {
	@Id
	private String email;
	private String password;
	private String username;
	private String phone;
	private String address;

}
