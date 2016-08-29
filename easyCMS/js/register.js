$(function(){
	var windowWidth=window.screen.width;
	$("body").css("width",windowWidth);

	var emailBox=document.getElementById("emailBox");
	var email=document.getElementById("email");
	email.onblur=function(){
		emailV(email,emailBox);
	}

	var password=document.getElementById("password");
	var passwordVa=document.getElementById("passwordVa");
	var passVaBox=document.getElementById("passVaBox");
	passwordVa.onblur=function(){
		passV(password,passwordVa,passVaBox);
	}



});

