
var mode=0;
function goToGroupCategory(obj){
    obj.insertAfter($("#group_category"));
    $(obj).on("click",
        function(){
            goToFriendCategory($(this));
        }
    );
    var index=friendIndexOf($(obj).text());
    global_groups_list.push(global_friends_list[index]);
    global_friends_list.splice(index,1);
    ajaxSubmit();
    
}
function goToFriendCategory(obj){
    obj.insertAfter($("#friend_category"));
    $(obj).on("click",
        function(){
            goToGroupCategory($(this));
        }
    );
    var index=groupIndexOf($(obj).text());
    global_friends_list.push(global_groups_list[index]);
    global_groups_list.splice(index,1);
    ajaxSubmit();
}
function setListener() {
  for(i in $(".list-group-item")){
     if(($(".list-group-item")[i]).id=="group_category"){
        mode=2;
        continue;
    }
    if(($(".list-group-item")[i]).id=="friend_category"){
        mode=1;
        continue;
    }
    if(($(".list-group-item")[i]).id=="plus"){
        mode=0;
    }
    if(mode==1){
        $($(".list-group-item")[i]).on("click",
            function(){
                goToGroupCategory($(this));
            }
        );
    }
    if(mode==2){
        $($(".list-group-item")[i]).on("click",
            function(){
                goToFriendCategory($(this));
            }
        );
    }
  }
}
function friendIndexOf(name) {    
    for (var i = 0; i < global_friends_list.length; i++) {
        if (global_friends_list[i].name == name) {
            return i;
        }
    }
    return -1;
}
function groupIndexOf(name) {    
    for (var i = 0; i < global_groups_list.length; i++) {
        if (global_groups_list[i].name == name) {
            return i;
        }
    }
    return -1;
}