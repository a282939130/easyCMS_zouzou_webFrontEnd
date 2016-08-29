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