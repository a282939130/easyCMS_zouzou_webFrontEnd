window.onload=function(){
        var btn_add=document.getElementById("btn_add");
        btn_add.onclick=function(){
                var parentInframe=parent.document.getElementById("secInframe");
                parentInframe.src="easyCMadd_addMember_modifyMember/modifyMember.html";
        };
};