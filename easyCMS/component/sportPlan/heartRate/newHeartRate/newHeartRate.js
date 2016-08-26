window.onload=function(){
	var addStage=document.getElementById("addStage");
	var heartRateForm=document.getElementById("heartRateForm");
	var stageBox=document.getElementById("stageBox");
	var stageRow=document.getElementsByClassName("stageRow")[0];
	var stageRowHtml=stageRow.innerHTML;
	var stageStrip=document.getElementById("stageStrip");

	addStage.onclick=function(){
		var newRow=document.createElement("div");
		newRow.setAttribute("class","stageRow");
		newRow.innerHTML=stageRowHtml;
		stageBox.appendChild(newRow);
	}





}






// /////////////////////////
// //////////////functions
// /////////////////////////
// delete button
function dFB(obj){
	obj.parentNode.removeChild(obj);
}
// change the background color
function cBC(obj,bColor){
	obj.style.backgroundColor=bColor;
}
// draw the line for heart rate
function dHL(cx,start,rate,end,color){
	start=parseInt(start)+100+'';
	end=parseInt(end)+100+'';
	cx.globalAlpha=0.7;
    cx.beginPath();
	cx.moveTo(start,220);
	cx.lineTo(start,(220-rate));
	cx.lineTo(end,(220-rate));
	cx.lineTo(end,220);
	cx.lineTo(start,220);
	cx.fillStyle=color;
	cx.fill();
	cx.closePath();
	cx.beginPath();
	cx.moveTo(start,(220-rate));
	cx.lineTo(end,(220-rate));
	cx.strokeStyle="red";
	cx.stroke();
	cx.closePath(); 
}
//draw rate rec	
function dRR(canvasId,rowsName,inputName){
	var cv=document.getElementById(canvasId);
	var cx=cv.getContext('2d');
	cx.clearRect(0,0,1000,290);
	var stageRows=document.getElementsByClassName(rowsName);
		for(var i=0;i<stageRows.length;i++){
			(function(i){
				var pps=$(stageRows[i]).find(inputName);
				var color,rt=pps[2].value;
				if(rt<115){
					color="#CCCCCC";
				}else if(rt>114&&rt<134){
					color="#3ED2F8";
				}else if(rt>113&&rt<153){
					color="#32F9CE";
				}else if(rt>152&&rt<172){
					color="#F9CD46";
				}else if(rt>171&&rt<191){
					color="#FA6869";
				}
				dHL(cx,pps[0].value,rt,pps[1].value,color);
			})(i);
		}
}
//////显示图表
function showNode(){
	var stage=document.getElementById("stageStrip");
	stage.style.display="block";
}

