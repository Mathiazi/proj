function closeAuth() {
    let formLogin = document.getElementById("form-login");
    formLogin.style.display = "none";
}
function admLoginDesktop() {
    setTimeout( () => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 100)
}
function admLoginMob() {
    menuMobile();

    setTimeout( () => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 500)
}