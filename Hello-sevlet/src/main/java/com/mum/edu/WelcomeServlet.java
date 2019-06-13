package com.mum.edu;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/web/welcome")
public class WelcomeServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Cookie ck[] = req.getCookies();
		if(ck!=null) {
			String name = ck[0].getValue();
			if(!name.equals("") || name!=null)
				req.getRequestDispatcher("/WEB-INF/welcome.jsp").forward(req, resp);
		}else {
			resp.sendRedirect(req.getContextPath()+"/login");
		}
		
	}
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException ,IOException {
		
	};

}
