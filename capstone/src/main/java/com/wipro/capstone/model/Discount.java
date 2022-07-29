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
public class Discount {
	@Id
	private String discountCode;

	private float discountAmount;
	private String discountName;
	private String email;
	
}
