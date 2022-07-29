package com.wipro.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.model.User;
import com.wipro.capstone.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	//Store User Details
	public String storeUserDetails(User user) {
		if(!userRepository.existsById(user.getEmail())) {
			userRepository.save(user);
			return "User Added Sucessfully";
		}else {
			return "User Already Exists!!!";
		}
	}
	
	//User login checking
	public String checkUserDetails(User user) {
		   if(userRepository.existsById(user.getEmail())) {
			   User u = userRepository.getById(user.getEmail());
			   if(u.getPassword().equals(user.getPassword())) {
				   return "You Logged In Sucessfully";
			   }else {
				   return "Please Enter Correct Details";
			   }				   
		   }else {
			   return "Your Details Are Not Exists!!";
		   }   
	   }
	
	//User logout checking
		public String userLogout(String email) {
			   if(userRepository.existsById(email)) {
					   return "LogOut Sucessfully";
				   }else {
					   return "Please Enter Correct Details";
				   }				   	   
		   }
	
	//Update User Details ByEmail
	public String updateUserDetails(User user) {
		if(userRepository.existsById(user.getEmail())) {
			User u=userRepository.getById(user.getEmail());
			if(u.getPassword().equals(user.getPassword())) {
				return "You are giving old details";
			}else {
				u.setPassword(user.getPassword());
				userRepository.saveAndFlush(u);
				return "User Updated Sucessfully";
			}
		}else {
			return "User not Exists!!";			
		}						
	}
	
	//ToSee All Users Information
	public List<User> getAllUsersDetails() {
		return userRepository.findAll();
	}

	//To delete a userBy Email
	public String deleteUserDetails(String email) {
		if(!userRepository.existsById(email)) {
			return "User not Exists!!";
		}else {
			userRepository.deleteById(email);
			return "User Deleted Sucessfully";
		}
	}


}
