$(function(){
	var jsonData=$.getJSON("viewRunPlanDemo.json",function(data){
		var runPlan=document.getElementById("runPlan");
		var rows=data.length;
		for(var i=0;i<rows;i++){
			var newForm=document.createElement("form");
			newForm.innerHTML='<div class="runPlanDetail"><div class="runPanTitleDemo" name="runPlanItemName" class="titles">标题1</div><div class="runPlanDaysDemo" name="runPlanDay">5天</div><div class="runPlanDescriptionDetail description" name="runPlanItemName">xxxxxxxxxxxxxxxx</div><div class="runPlanBtns"><input type="button"  class="bbt" id="updataBtn"  value="修改"/><input type="button" id="deleteBtn"  class="bbt"  value="删除" onclick="del(this.parentNode.parentNode)" /></div></div>';
			runPlan.appendChild(newForm);
        }
        var runPanTitleDemos=document.getElementsByClassName("runPanTitleDemo");
        var runPlanDaysDemos=document.getElementsByClassName("runPlanDaysDemo");
        var runPlanDescriptionDetails=document.getElementsByClassName("runPlanDescriptionDetail");
        for(var i=0;i<runPanTitleDemos.length;i++){
        	(function(i){
        		runPlanDaysDemos[i].innerHTML=data[i].days;
        		runPanTitleDemos[i].innerHTML=data[i].title;
        		runPlanDescriptionDetails[i].innerHTML=data[i].dayDescription;
        	})(i);
        }
        








	});






});
// functions
// 删除
    function del(obj){
        obj.parentNode.removeChild(obj);
    }
