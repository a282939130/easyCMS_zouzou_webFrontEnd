 //email validate
var emailRegExp=/^[a-zA-Z0-9][\w-]{1,15}@[a-zA-Z0-9][\w-]{1,21}\.(com|net|cn|org){1}\.?[c]?[n]?$/i;
 var emailV=function(obj,box){
 	 box.innerHTML="";
 	if(obj.type=="email"){
 		var emailValue=obj.value;
 		if(emailRegExp.test(emailValue)){
 			box.innerHTML="yes";
 		}else{
 			box.innerHTML="举个栗子:abc@pp.com";
 		}
 	}
 }
 var passwordRegExp=/\w{3,18}/;
 var passV=function(obj1,obj2,box){
 	alert(obj2.value);
 	if("password"==obj1.type==obj2.type){
 		if(obj1.value==obj2.value){
 			if(passwordRegExp.test(obj2.value)){
 				alert(obj2.value);
 				box.innerHTML="yes";
 			}
 			
 		}else{
 			box.innerHTML="密码由字母数字下划线组成的3位至18位";
 		}
 	}
 }