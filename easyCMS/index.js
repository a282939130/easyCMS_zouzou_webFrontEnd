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
			sysTime.innerHTML='<img src="easyCMadd_addMember_modifyMember/img/clock.png">'+"系统日期："+time.toLocaleDateString()+" 星期"+dayN;
		}, 1000);
	


	var navMenuImg=document.getElementById("navMenuImg");
	navMenuImg.onmouseover=function(){
		if(this.src.indexOf("006")>0){
			this.src="easyCMadd_addMember_modifyMember/img/007.png";
		}else if(this.src.indexOf("009")>0){
			this.src="easyCMadd_addMember_modifyMember/img/008.png";
		}
	}
	navMenuImg.onmouseout=function(){
		if(this.src.indexOf("007")>0){
			this.src="easyCMadd_addMember_modifyMember/img/006.png";
		}else if(this.src.indexOf("008")>0){
			this.src="easyCMadd_addMember_modifyMember/img/009.png";
		}
	}
	navMenuImg.onclick=function(){
		var inframe=document.getElementById("secInframe").contentWindow;
		var inFrameNavM=inframe.document.getElementById("navM");
		if(this.src.indexOf("007")>0){
			this.src="easyCMadd_addMember_modifyMember/img/008.png";
			inFrameNavM.style.display="none";
		}else if(this.src.indexOf("008")>0){
			this.src="easyCMadd_addMember_modifyMember/img/007.png";
			inFrameNavM.style.display="block";
		}
	};





};