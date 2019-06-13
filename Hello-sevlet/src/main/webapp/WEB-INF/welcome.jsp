<%@page import="com.mum.edu.model.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page isELIgnored="false" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body> 
	<h1>Welcome</h1>
	<p>Dear:<span style="color:red"> <%= request.getSession().getAttribute("user") %></span></p>
	
	
	Keep the page ideal for 30 seconds
   <br> And try reloading the page
   <br> you will be redirected to home page automatically
   <br>

   </br>
   </br>
   <a href="../logout">Logout</a>
	
</body>
</html>