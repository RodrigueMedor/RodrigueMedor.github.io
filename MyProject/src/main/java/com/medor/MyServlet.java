package com.medor;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String name = req.getParameter("Name");
		String email = req.getParameter("email");
		String problem = req.getParameter("problem");
		String description = req.getParameter("description");
		
		PrintWriter pri = resp.getWriter();
		
		//System.out.println("*************************************************************************");
		pri.print("Thank you! ["+ name +"] for contacting us. We should receive reply from us with in 24 hrs in your email address ["+ email +"]. Let us know in our support email ["+ problem +"] if you don’t receive reply within 24 hrs. Please be sure to attach your reference ["+ description +"] in your email.\n" + 
				"Support_email should come from context param.\n" + 
				"Support_ticket_id is generated automatically for every request.");
	}
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//resp.getWriter().println("<h1>Hello</h1>");
		req.getRequestDispatcher("/index.jsp").forward(req, resp);
	}

	
	

}
