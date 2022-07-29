package com.wipro.capstone.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wipro.capstone.model.CSVHelper;
import com.wipro.capstone.model.Products;
import com.wipro.capstone.repository.ProductRepository;

@RestController
@RequestMapping("/csv")
@CrossOrigin(origins = "http://localhost:4200")
public class CSVController {

	@Autowired
	ProductRepository prepo;
	
	@PostMapping(value="upload")
	public void save(MultipartFile file) {
	    try {
	      List<Products> products = CSVHelper.csvToProducts(file.getInputStream());
	      prepo.saveAll(products);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store csv data: " + e.getMessage());
	    }
	  }	
}
