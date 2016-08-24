window.onload=function(){
	var addStage=document.getElementById("addStage");
	var heartRateForm=document.getElementById("heartRateForm");
	var stageBox=document.getElementById("stageBox");
	var stageRow=document.getElementById("stageRow");
	var stageRowHtml=stageRow.innerHTML;
	

	addStage.onclick=function(){
		var newRow=document.createElement("div");
		newRow.innerHTML=stageRowHtml;
		stageBox.appendChild(newRow);

	}
}