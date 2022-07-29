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
public class Wishlist {
	
	@Id	
	private String productId;
	private String productName;
	private float productPrice;
	private String url;
	public String productCategory;
	public String email;
	

}
