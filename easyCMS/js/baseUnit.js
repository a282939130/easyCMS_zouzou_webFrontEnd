//base function units
// validate the number input range
function validateNumberInput(obj,min,max){
	var inputV=obj.value;
	if(!(inputV>=min&&inputV<=max)){
		obj.style.backgroundColor="red";
	}else{
		obj.style.backgroundColor="";
	}
	
}
 //email validate
var emailRegExp=/^[a-zA-Z0-9][\w-]{1,15}@[a-zA-Z0-9][\w-]{1,21}\.(com|net|cn|org){1}\.?[c]?[n]?/i;
 var emailV=function(obj,box){
 	 box.innerHTML="";
 	if(obj.type=="email"){
 		var emailValue=obj.value;
 		if(emailRegExp.test(emailValue)){
 			obj.style.backgroundColor="";
 			box.innerHTML="yes";
 		}else{
 			obj.style.backgroundColor="red";
 			box.innerHTML="举个栗子:abc@pp.com";
 		}
 	}
 }
 // password validate
 var passwordRegExp=/\w{3,18}/;
 var passV=function(obj1,obj2,box){

 	if("password"==obj2.type){
 		
 		if(obj1.value==obj2.value){

 			if(passwordRegExp.test(obj2.value)){
 			obj2.style.backgroundColor="";
 				box.innerHTML="yes";
 			}else{
 			obj2.style.backgroundColor="red";
 			box.innerHTML="密码由3至18位字母数字下划线组成";
 			}
 		}else{
 			obj2.style.backgroundColor="red";
 			box.innerHTML="密码由3至18位字母数字下划线组成";
 		}
 			
	 }
 }