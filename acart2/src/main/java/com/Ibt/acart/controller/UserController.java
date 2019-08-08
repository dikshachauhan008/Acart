package com.Ibt.acart.controller;
import java.util.ArrayList;
import java.util.List;

import com.Ibt.acart.exceptionhandling.ResourceNotFountException;
import com.Ibt.acart.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ibt.acart.service.AcartServiceException;
import com.Ibt.acart.service.UserService;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/all")
	public List<User> userList()
	{
		return userService.userList();
	}
	
	@GetMapping("/{id}")
	public User findOne(@PathVariable Long id) throws ResourceNotFountException, AcartServiceException
	{
		try {
			User user = userService.findOne(id);
			if (user == null) {
				throw new ResourceNotFountException("User not found");
			}
			return user;
		} catch (AcartServiceException e) {
			throw new AcartServiceException("Internal Server Exception while getting exception");
		}
	}
	@PostMapping("/add")
	public void addUser(@RequestBody User user) throws AcartServiceException 
	{
		List<User> users= new ArrayList <>();
		users.addAll(userList());
		String username=user.getUser_name();
		for(int i=0; i<users.size();i++)
		{
			if(((users.get(i).getUser_name()).equals(username)))
			{
				throw new AcartServiceException("User with same username already exists");
			}
		}
			userService.addUser(user);
	}
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable Long id) throws ResourceNotFountException, AcartServiceException 
	{
		try {
			User user = userService.findOne(id);
			if (user == null) {
				throw new ResourceNotFountException("Can't delete user because user with this Id don't exist");
			}
			return userService.deleteUser(id);
		} catch (AcartServiceException e) {
			throw new AcartServiceException("Internal Server Exception while getting exception");
		}
	
	}
	
	@PutMapping("/{id}")
	public String updateUser(@PathVariable Long id, @RequestBody User user) throws ResourceNotFountException, AcartServiceException
	{
		try {
			User user1 = userService.findOne(id);
			if (user1 == null) {
				throw new ResourceNotFountException("Can't update user because user with this Id don't exist");
			}
			return userService.updateUser(id, user);
		} catch (AcartServiceException e) {
			throw new AcartServiceException("Internal Server Exception while getting exception");
		}
		
	}
    @PutMapping("/login")
    public User login(@RequestBody User user) throws ResourceNotFountException {
    	User user1 = userService.login(user);
		if (user1 == null) {
			throw new ResourceNotFountException("Login credentials don't exist");
		}
		return userService.login(user);
		
    }
	
}
