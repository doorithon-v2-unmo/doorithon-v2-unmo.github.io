$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
    procFriends();
  });
});

var mode=0;

function goToGroupCategory(obj){
    obj.insertAfter($("#group_category"));
    $(obj).on("click",
        function(){
            goToFriendCategory($(this));
        }
    );
    
}
function goToFriendCategory(obj){
    obj.insertAfter($("#friend_category"));
    $(obj).on("click",
        function(){
            goToGroupCategory($(this));
        }
    );
}
$(document).ready(function () {
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
});
