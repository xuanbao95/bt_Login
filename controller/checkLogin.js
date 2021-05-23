function checkLogin() {
    var login = localStorage.getItem("login");
    var emailPat = /^(.+)@(.+)$/;

    var isLogin = window.location.pathname === "/views/login.html";
    if (login) {
        if (isLogin) {
            window.location.assign("nike.html")

        }
        return
    }
    !isLogin && window.location.assign("login.html")
}
checkLogin();