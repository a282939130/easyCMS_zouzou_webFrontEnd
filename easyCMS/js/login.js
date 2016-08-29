$(function(){
	var mainBox=document.getElementById("mainBox");
	autoSize(mainBox);




	var loginBtn=document.getElementById("loginBtn");
	loginBtn.onclick=function(){
		var inputName=document.getElementById("userName").value;
		var inputPassword=document.getElementById("passwordName").value;
		loginPass("users.json",inputName,inputPassword);
	}

});
// ////////////functions
// login validate
		function loginPass(url,nameV,passV){
			$.getJSON(url,function(data){
				for(var i=0;i<data.length;i++){
					if(nameV==data[i].name){
						if(passV==data[i].password){
							window.open("index.html");
						}
					}
				}
			});
		}
// window screen width height
function autoSize(obj){
	var wi=window.screen.width;
	var hei=window.screen.height;
	obj.style.width=wi+"px";
	obj.style.height=hei+"px";
	obj.style.lineHeight=hei+"px";
}