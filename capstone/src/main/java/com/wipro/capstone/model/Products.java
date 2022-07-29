package com.wipro.capstone.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Products {
	@Id
	@Column(name="productId",nullable=false)
	private String productId;
	private String productName;
	private String productCategory;
	private float productPrice;
	private String url;
	private int stocks;
	
	
	
	
	

}
