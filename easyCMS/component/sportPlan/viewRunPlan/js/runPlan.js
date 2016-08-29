

// 删除
    function del(obj){
        obj.parentNode.removeChild(obj);
    }

//修改
    function updata(e){
        if(e.value == "修改"){
            e.value = "确定";
            //获取行中的元素
            var runPlanDetail = e.parentNode.parentNode;
            var titleDemo = runPlanDetail.childNodes[1];
            var daysDemo = runPlanDetail.childNodes[3];
            var descriptionDemo = runPlanDetail.childNodes[5];


            //获取行中元素的value值
            var titleVal = titleDemo.innerHTML;
            var daysDemoVal = daysDemo.innerHTML;
            var descriptionVal = descriptionDemo.innerHTML;

            //变成可编辑状态
            titleDemo.innerHTML = '<input type="text" value='+titleVal+' style="width:150px;" />';
            daysDemo.innerHTML = '<input type="text" value='+daysDemoVal+' style="width:150px;" />';
            descriptionDemo.innerHTML = '<textarea style="width:590px;height:150px;overflow:auto;font-size:8px;" >'+descriptionVal+'</textarea>';
        }else{
            e.value = "修改";
            //获取行中元素
            var runPlanDetail = e.parentNode.parentNode;
            var titleDemo = runPlanDetail.childNodes[1];
            var daysDemo = runPlanDetail.childNodes[3];
            var descriptionDemo = runPlanDetail.childNodes[5];

            //把input值赋予行中元素
            titleDemo.innerHTML = titleDemo.childNodes[0].value;
            daysDemo.innerHTML = daysDemo.childNodes[0].value;
            descriptionDemo.innerHTML = descriptionDemo.childNodes[0].value;
            //console.log(titleDemo.childNodes[0].value);
        }
    }




