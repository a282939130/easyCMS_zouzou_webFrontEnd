//删除
var btn_del=function(obj){
        	obj.parentNode.removeChild(obj);
        }
window.onload=function(){
        var btn_add=document.getElementById("btn_add");
        btn_add.onclick=function(){
                window.open("modifyMember.html","_self");
        };

};

//复选框

function check_box(isChecked){
        //var chkbox = document.getElementsByTagName("input");
        ////console.log(chkbox);
        //if(chkbox.type == "checkbox"){
        //        this.checked = isChecked;
        //}
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type == "checkbox") {
                        inputs[i].checked = isChecked;
                }
        }
}
