function login() {
    var user = document.getElementById("userName").value;
    var pass = document.getElementById("passWord").value;
    axios({
        url: "http://svcy3.myclass.vn/api/Users/signup",
        method: "POST",
        data: {
            email: user,
            password: pass
        }
    })
        .then(function (result) {
            localStorage.setItem("login", JSON.stringify(result.data))
            window.location.assign("nike.html")
        }).catch(function (erros) {
            console.log(erros);
        })
}
