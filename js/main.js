/**
 * Created by kde713 on 2017. 5. 14..
 */

var global_friends_list;
function procFriends() {
    showLoader();
    $.ajax({
        type: "POST",
        url: "https://unmo.herokuapp.com/member/friends",
        data: "session_id=" + getSessionId(),
        success: function (data) {
            hideLoader();
            if (data.result) {
                const friends_list = data.data;
                // TODO: Render friends
               
                for(obj in friends_list){
                    /*
                     "name": name,
            "id": int(id),
            "userid": userid,
            "nickname": nickname,
            "picture": picture
                    */
                     temp=$("#clone").clone();
                    console.log(obj);
                    $(temp).text(obj.name);
                    $(temp).removeClass("hide").insertAfter("#friend_category");
                }
                
                
            } else {
                if (data.message == "auth.notexist") {
                    alert("세션이 만료되었습니다");
                    clearSessionId();
                    location.href = "./";
                } else {
                    alert("친구 목록을 불러오던 도중 알 수 없는 오류가 발생했습니다");
                }
            }
        },
        error: function (e) {
            hideLoader();
            console.log(e.message);
            alert("로그아웃 도중 알 수 없는 오류가 발생했습니다.");
        }
    });
}


function procLogout() {
    showLoader();
    $.ajax({
        type: "POST",
        url: "https://unmo.herokuapp.com/member/logout",
        data: "session_id=" + getSessionId(),
        success: function (data) {
            hideLoader();

            if (data.result) {
                location.href = "./";
            } else {
                if (data.message == "auth.notexist") {
                    clearSessionId();
                    location.href = "./";
                } else {
                    alert("로그아웃 도중 알 수 없는 오류가 발생했습니다.");
                }
            }
        },
        error: function (e) {
            hideLoader();
            console.log(e.message);
            alert("로그아웃 도중 알 수 없는 오류가 발생했습니다.");
        }
    });
}

function ajaxSubmit() {
    showLoader();
    $.ajax({
        type: "POST",
        url: "https://unmo.herokuapp.com/service/submit",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({"session_id": getSessionId(), "users": []}),
        success: function (data) {
            hideLoader();

            if (data.result) {
                refreshTimetable(data.data.avaliable_times);
            } else {
                if (data.message == "auth.notexist") {
                    alert("세션이 만료되었습니다.");
                    clearSessionId();
                    location.href = "./";
                } else {
                    alert("서버에서 알 수 없는 오류가 발생하였습니다. 관리자에게 문의해주세요.");
                }
            }
        },
        error: function (e) {
            hideLoader();
            console.log(e.message);
            alert("로그아웃 도중 알 수 없는 오류가 발생했습니다.");
        }
    });
}

function refreshTimetable(time_data) {
    // TODO: Refresh view with ajax data
}

window.onload = function () {
    if(!getSessionId()) {
        alert("로그인 후 이용가능합니다!");
        location.href = "./";
    }
    else{
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
        procFriends();
    }
};