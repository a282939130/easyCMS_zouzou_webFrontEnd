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
// /////////
		
			var input1s=document.getElementsByClassName("input1");
			var input2s=document.getElementsByClassName("input2");
			var input3s=document.getElementsByClassName("input3");
			var stageRows=document.getElementsByClassName("stageRow");
			var input3s=document.getElementsByClassName("input3");
			var stageNs=stageRows.length;
			var ns=stageNs-2;
					var nn="new"+ns;
					var nn=document.createElement("div");
					// 进度条长度
					var stripL,stripC;
					var l1=input1s[ns].value;
					var l2=input2s[ns].value;
					stripL=l2-l1;
					if(stripL<5){
						stripL=stripL*2;
					}else if((stripL>4)&&(stripL<100)){
						stripL=l2-l1;
					}else if(stripL>99){
						stripL=stripL*0.7;
					}
					// 进度条色
					var cc=input3s[ns].value;
					if(cc<115){
						stripC="#CCCCCC";
						input3s[ns].style.backgroundColor="#CCCCCC";
					}else if(cc>114&&cc<134){
						stripC="#44CFF6";
						input3s[ns].style.backgroundColor="#44CFF6";
					}else if(cc>133&&cc<152){
						stripC="#2CFCCB";
						input3s[ns].style.backgroundColor="#2CFCCB";
					}else if(cc>151&&cc<171){
						stripC="#FFCA46";
						input3s[ns].style.backgroundColor="#FFCA46";
					}else if(cc>170&&cc<190){
						stripC="#FD6768";
						input3s[ns].style.backgroundColor="#FD6768";
					}

					// nn.innerHTML="start:"+l1+"<br/>"+"rate:"+cc+"<br/>"+"end:"+l2;
					if(stripL<56){
						var ls=60-stripL;
						nn.setAttribute("style","height:"+cc/5+"px;line-height:20px;width:"+stripL+"px;background-color:"+stripC+";display:inline-block;vertical-align:bottom;");
							// margin-right:"+ls+"px;");
					}else{
						nn.setAttribute("style","height:"+cc/5+"px;line-height:20px;width:"+stripL+"px;background-color:"+stripC+";display:inline-block;vertical-align:bottom;");
					}
					stageStrip.appendChild(nn);

					var nnO=document.createElement("div");
					nnO.innerHTML="";
					nnO.setAttribute("style","height:10px;line-height:10px;width:"+stripL+"px;background-color:"+stripC+";display:inline-block;");
					var stageStripO=document.getElementById("stageStripO");
					stageStripO.appendChild(nnO);

		
		








	}


	var sb=document.getElementById("sb");
	sb.onclick=function(){
		var values=$("form").serialize();
		alert(values);
	}


//     var jsonstr = '[{"Title":"星期二多云","Content":"是佛时间佛教;"},{"Title":" 第一章","Content":"<strong>多云，微风</strong>"},{"Title":" 第二章","Content":"降落伞"},{"Title":" 第三章","Content":"<em><u></u></em>"}]';

//     var jsonDataString = '{result:true,message:"这是返回的信息"}';
// 　　
// 　　//javascript 方式
//     var jsonData = eval("(" + jsonDataString + ")");
// 　　//jQuery 方式
//     var dataset = $.parseJSON(jsonstr);

//     alert(dataset[0].Title);

//     alert(jsonData.message);


	// var myCanvas=document.getElementById("myCanvas");
	// var ctx=myCanvas.getContext('2d');
	// ctx.moveTo(10,5);
	// ctx.lineTo(50,5);
	// ctx.stroke();


}