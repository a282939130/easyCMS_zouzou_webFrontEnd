window.onload=function(){
	var trigersCommonH=document.getElementById("trigersCommonH");
	var trigersCommonHM=document.getElementById("trigersCommonHM");
	
	trigersCommonH.onmouseover=function(){
		trigersCommonHM.style.display="block"
	}
	trigersCommonH.onmouseleave=function(){
		trigersCommonHM.style.display="none"
	}
}