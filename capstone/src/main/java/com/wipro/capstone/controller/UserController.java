package com.wipro.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.model.User;
import com.wipro.capstone.service.UserService;

@RestController
@RequestMapping(value="User")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping(value="register",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeUserInfo(@RequestBody User user) {
		return userService.storeUserDetails(user);	
	}
	
	@PostMapping(value="login")
	public String checkUserInfo(@RequestBody User user) {
		return userService.checkUserDetails(user);	
	}

	 @GetMapping(value = "logout/{email}")
		 public String userLogoutInfo(@PathVariable("email") String email) {
				//return "User LogOut Sucessfully";
		 return userService.userLogout(email);
	}
	 
	@PatchMapping(value="updateUser")
	public String updateUserPassword(@RequestBody User user) {
		return userService.updateUserDetails(user);
	}
	
	@GetMapping(value="displayUser")
	public List<User> getAllDetailsOfUsers(){
		return userService.getAllUsersDetails();
	}
	
	@DeleteMapping(value="deleteUser/{email}")
	public String deleteUserDetails(@PathVariable("email") String email) {
		return userService.deleteUserDetails(email);
	}
	
	
	
}
