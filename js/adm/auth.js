function closeAuth() {
    let formLogin = document.getElementById("form-login");
    formLogin.style.display = "none";
}
function admLogin() {
    menuMobile();

    setTimeout( () => {
        let formLogin = document.getElementById("form-login");
        formLogin.style.display = 'block';
    }, 500)
}