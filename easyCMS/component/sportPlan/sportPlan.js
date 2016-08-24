window.onload=function(){
	var trigersCommonH=document.getElementById("trigersCommonH");
	var trigersCommonHM=document.getElementById("trigersCommonHM");
	var trigers=document.getElementsByClassName("trigers");
	var trigersPulls=document.getElementsByClassName("trigersPull");

	for(var i=0;i<2;i++){
		(function(i){
			trigers[i].onmouseover=function(){
				trigersPulls[i].style.display="block"
			}
			trigers[i].onmouseleave=function(){
				trigersPulls[i].style.display="none"
			}
		})(i);
	}
	

	var newHeartP=document.getElementById("newHeartP");
	var sportPlanIframe=document.getElementById("sportPlanIframe");
	newHeartP.onclick=function(){
		sportPlanIframe.src="heartRate/newHeartRate/newHeartRate.html";
	}

	var trainerTrigers=document.getElementsByClassName("trainerTrigers");
	for(var i=0;i<trainerTrigers.length;i++){
		trainerTrigers[i].onclick=function(){
			alert("只对教练开放");
		}
	}
}