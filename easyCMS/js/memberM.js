var btn_del=function(obj){
        	obj.parentNode.removeChild(obj);
        }
window.onload=function(){
        var btn_add=document.getElementById("btn_add");
        btn_add.onclick=function(){
                window.open("modifyMember.html","_self");
        };

};