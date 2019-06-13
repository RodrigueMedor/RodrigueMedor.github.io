package com.mum.edu.model;

import java.util.ArrayList;
import java.util.List;

public class UserDao {
	
	private List<User> users=new ArrayList<>();
	
	public UserDao() {
		// TODO Auto-generated constructor stub
		User user= new User("user", "1234");
		User user1= new User("roro", "pass");
		User user3= new User("Sara", "love");
		users.add(user);
		users.add(user3);
		users.add(user1);
		
	}
	
	public boolean login(User user) {
		boolean isValid= false;
		for(User us: users) {
			if(us.getUsername().equals(user.getUsername()) && us.getPassword().equals(user.getPassword()))return true;
		}
		return isValid;
	}
	

}
