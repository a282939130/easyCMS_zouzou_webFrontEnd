window.onload=function(){
	// var closeImg=document.getElementById("closeImg");
	// closeImg.onmouseover=function(){
	// 	closeImg.src="../img/close1.png/";
	// };
	// closeImg.onmouseout=function(){
	// 	closeImg.src="../img/close.png/";
	// };
	var box=document.getElementById("emailBox");
	var MM_triger=document.getElementsByClassName("MM_triger")[0];
	MM_triger.onclick=function(){
		window.open("userM_memberM_memberM.html","_self");
	};

	var emailInput=document.getElementById("emailInput");
	emailInput.onblur=function(){
		emailV(emailInput,box);
	}

	var pass1=document.getElementById("pass1");
	var pass2=document.getElementById("pass2");
	passBox=document.getElementById("passBox");
	pass2.onblur=function(){
		passV(pass1,pass2,passBox);
	}
	


};