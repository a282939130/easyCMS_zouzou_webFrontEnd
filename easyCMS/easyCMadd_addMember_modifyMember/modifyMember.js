window.onload=function(){
	var closeImg=document.getElementById("closeImg");
	closeImg.onmouseover=function(){
		closeImg.src="../img/close1.png/";
	};
	closeImg.onmouseout=function(){
		closeImg.src="../img/close.png/";
	};
	var MM_triger=document.getElementsByClassName("MM_triger")[0];
	MM_triger.onclick=function(){
		var parentInframe=parent.document.getElementById("secInframe");
		parentInframe.src="memberManagement/userM_memberM_memberM.html/";
	};






};