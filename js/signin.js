/**
 * Created by kde713 on 2017. 5. 14..
 */

function procLogin(user_id,user_pwd) {
    showLoader();
    $.ajax({
        type: "POST",
        url: "https://unmo.herokuapp.com/member/login",
        data: "uid=" + user_id + "&pwd=" + user_pwd,
        success: function (data) {
            hideLoader();

            if (data.result) {
                sessionStorage.unmo_session_id = data.data.session_id;
                location.href = "./main.html";
            } else {
                if (data.message == "auth.failed") {
                    alert("아이디나 비밀번호가 올바르지 않습니다.");
                } else {
                    alert("로그인에 실패하였습니다.");
                }
            }
        },
        error: function (e) {
            hideLoader();
            console.log(e.message);
            alert("로그인 도중 알 수 없는 오류가 발생했습니다.");
        }
    });
}

window.onload = function () {
    if(getSessionId()) {
        location.href = "./main.html";
    }
    else{
        $("#submit").on("click",function(){
            login();
        });
    }
};