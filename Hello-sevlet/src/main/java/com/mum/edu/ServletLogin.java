package com.mum.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mum.edu.model.User;
import com.mum.edu.model.UserDao;
@WebServlet("/login")
public class ServletLogin extends HttpServlet{
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{

		
		User user = new User();
		user.setUsername(request.getParameter("username"));
		user.setPassword(request.getParameter("password"));
		UserDao userDao= new UserDao();
		
		if(userDao.login(user)) {
			request.getSession().setAttribute("user", user.getUsername());
			Cookie cookie = new Cookie("roro", user.getUsername());
			response.addCookie(cookie);

			((HttpServletResponse)response).sendRedirect(((HttpServletRequest)request).getContextPath()+"/web/welcome");
		 
			
		}else {
			request.setAttribute("errorMessage", "Invalid login and password, try again!");
			response.sendRedirect(request.getContextPath()+"/login");
		}
		
	}
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		
		request.getRequestDispatcher("WEB-INF/index.jsp").forward(request, response);
		
	}

}
