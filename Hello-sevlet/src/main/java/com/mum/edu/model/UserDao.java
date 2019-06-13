package com.mum.edu.model;

import java.util.ArrayList;
import java.util.List;

public class UserDao {
	
	private List<User> users=new ArrayList<>();
	
	public UserDao() {
		// TODO Auto-generated constructor stub
		User user= new User("user", "1234");
		users.add(user);
		
	}
	
	public boolean login(User user) {
		boolean isValid= false;
		for(User us: users) {
			if(us.getUsername().equals(user.getUsername()) && us.getPassword().equals(user.getPassword()))return true;
		}
		return isValid;
	}
	

}
