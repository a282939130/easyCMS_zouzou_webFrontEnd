window.onload=function(){
	var sysTime=document.getElementById("sysTime");
	var time;
		
		setInterval(function(){
			time=new Date();
			var dayN=time.getDay();
			switch(dayN){
				case 1:
					dayN="一";
					break;
				case 2:
					dayN="二";
					break;
				case 3:
					dayN="三";
					break;
				case 4:
					dayN="四";
					break;
				case 5:
					dayN="五";
					break;
				case 6:
					dayN="六";
					break;
				case 0:
					dayN="日";
					break;
			}
			sysTime.innerHTML='<img src="img/clock.png">'+"系统日期："+time.toLocaleDateString()+" 星期"+dayN;
		}, 1000);
	


	var navMenuImg=document.getElementById("navMenuImg");
	navMenuImg.onmouseover=function(){
		if(this.src.indexOf("006")>0){
			this.src="img/007.png";
		}else if(this.src.indexOf("009")>0){
			this.src="img/008.png";
		}
	}
	navMenuImg.onmouseout=function(){
		if(this.src.indexOf("007")>0){
			this.src="img/006.png";
		}else if(this.src.indexOf("008")>0){
			this.src="img/009.png";
		}
	}
	/////////////////
	var inframe=document.getElementById("secInframe").contentWindow;
	var inframeI=document.getElementById("secInframe")
	navMenuImg.onclick=function(){
		
		var inFrameNavM=inframe.document.getElementById("navM");
		if(this.src.indexOf("007")>0){
			this.src="img/008.png";
			inFrameNavM.style.display="none";
		}else if(this.src.indexOf("008")>0){
			this.src="img/007.png";
			inFrameNavM.style.display="block";
		}
	};
	// 下拉菜单
	var tps=document.getElementsByClassName("tp");
	var pullDownMenus=document.getElementsByClassName("pullDownMenu");
	var rightImgs=document.getElementsByClassName("rightImg");
	for(var i=0;i<tps.length;i++){
		(function(i){
			tps[i].onclick=function(){
				if(rightImgs[i].src.indexOf("down")>0){
					rightImgs[i].src="img/up.png"
				}else if(rightImgs[i].src.indexOf("up")>0){
					rightImgs[i].src="img/down.png"
				}
			var pds=$(pullDownMenus[i]).find(".pd");
			var pdss=document.getElementsByClassName("pd");
			// 二级菜单变色
			for(var j=0;j<pds.length;j++){
				(function(j){
					pds[j].onmousedown=function(){
						for(var jj=0;jj<pdss.length;jj++){
							pdss[jj].style.backgroundColor="#D8DDE3";
						}
						pds[j].style.backgroundColor="#F5F5F5";
					};
				})(j);
			}



			if(getComputedStyle(pds[0],null).height=="0px"){
				for(var ii=0;ii<pds.length;ii++){
					pds[ii].style.height="28px";
					pds[ii].style.borderTop="1px solid white";
					pds[ii].style.borderBottom="1px solid #E3E4E3";
					pds[ii].style.opacity=1;
				}
				
			}else if(getComputedStyle(pds[0],null).height!="0px"){
				for(var ii=0;ii<pds.length;ii++){
					pds[ii].style.borderTop="";
					pds[ii].style.borderBottom="";
					pds[ii].style.height="0px";
					pds[ii].style.opacity=0;
				}
			}
		}
		})(i);
	}
	var spotN=document.getElementById("spotN");
	spotN.onclick=function(){
		inframeI.src="component/sportPlan/sportPlan.html";

	}


};