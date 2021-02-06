function closeAuth() {
    setTimeout(() => {
        var formLogin = document.getElementById("form-login");
        formLogin.style.display = "none";
    }, 200)
}
function admLoginDesktop() {
    setTimeout(() => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 500)
}
function admLoginMob() {
    menuMobile();

    setTimeout(() => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 1000)
}