package com.wipro.capstone.model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.*;
import org.apache.commons.csv.*;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.csv.QuoteMode;

import org.springframework.web.multipart.MultipartFile;

public class CSVHelper {

	
	public static String TYPE = "text/csv";
	  static String[] HEADERs = { "projectId", "projectName","url", "projectPrice", "projectCategory","stocks"};

	  public static boolean hasCSVFormat(MultipartFile file) {
	    if (TYPE.equals(file.getContentType())
	    		|| file.getContentType().equals("application/vnd.ms-excel")) {
	      return true;
	    }

	    return false;
	  }

	  public static List<Products> csvToProducts(InputStream is) {
	    try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        CSVParser csvParser = new CSVParser(fileReader,
	            CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

	      List<Products> products = new ArrayList<>();

	      Iterable<CSVRecord> csvRecords = csvParser.getRecords();

	      for (CSVRecord csvRecord : csvRecords) {
	    	  Products product = new Products(
	              csvRecord.get("productId"),
	              csvRecord.get("productName"),
	              csvRecord.get("url"),
	              Float.parseFloat(csvRecord.get("productPrice")),
	              csvRecord.get("productCategory"),
	              Integer.parseInt(csvRecord.get("stocks"))
	            );

	    	  products.add(product);
	      }

	      return products;
	    } catch (IOException e) {
	      throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
	    }
	  }
}
