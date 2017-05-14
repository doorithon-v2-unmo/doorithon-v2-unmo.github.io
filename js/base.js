/**
 * Created by kde713 on 2017. 5. 14..
 */

function getSessionId() {
    if (window.sessionStorage.unmo_session_id) {
        return window.sessionStorage.unmo_session_id;
    } else {
        return null;
    }
}

function clearSessionId() {
    window.sessionStorage.unmo_session_id = null;
}

function showLoader() {
    // TODO: Show Loader
    $("#overlay").show();
}

function hideLoader() {
    // TODO: Hide Loader
    $("#overlay").hide();
    
}