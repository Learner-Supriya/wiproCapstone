package com.wipro.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Cart {
	
	@Id
	private int pid;
	private String pname;
	private float price;
	private String url;
	public String category;
	private String email;
	private String password;

}
