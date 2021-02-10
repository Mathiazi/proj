window.addEventListener("load", () => {
    let theme = localStorage.getItem("status");
    if (theme == null)
        theme = "light";

    let themeName = document.getElementsByClassName('theme-name');
    if (theme == 'dark') {
        themeName[0].innerHTML = 'Light Mode';
        themeName[1].innerHTML = 'Light Mode';
    }
    else {
        themeName[0].innerHTML = 'Dark Mode';
        themeName[1].innerHTML = 'Dark Mode';
    }

    //#region header
    let header = document.getElementsByTagName("header");
    header[0].style.background = "var(--" + theme + "-header-bg)";
    header[0].style.color = "var(--" + theme + "-color-li-font)";

    let menuMobile = document.getElementById("menu-mobile");
    menuMobile.style.background = "var(--" + theme + "-header-bg)";
    //#endregion
    //#region main
    let body = document.getElementsByTagName("body");
    body[0].style.backgroundImage = "url('./files/image/" + theme + "-bg.png')";

    let login = document.getElementById('form-login');
    login.style.background = "var(--" + theme + "-login-bg)";
    let addProd = document.getElementById('add-prod');
    addProd.style.background = "var(--" + theme + "-login-bg)";

    let divcont = document.getElementById("div-cont");
    divcont.style.background = "var(--" + theme + "-divcont-bg)";

    let lblLastDigit = document.getElementById("lbl-lastDigit");
    lblLastDigit.style.color = "var(--" + theme + "-color-font-label)";

    let lblList = document.getElementById('lbl-list');
    lblList.style.color = "var(--" + theme + "-color-font-label)";

    let lbladdprod = document.getElementById("lbl-addProd");
    lbladdprod.style.color = "rgb(168, 168, 168)";

    let input = document.getElementsByClassName("inp");
    input[0].style.background = "var(--" + theme + "-inp-bg)";
    input[1].style.background = "var(--" + theme + "-inp-bg)";

    input[0].style.color = "var(--" + theme + "-inp-font-color)";
    input[1].style.color = "var(--" + theme + "-inp-font-color)";

    let divcalc = document.getElementsByClassName("div-calc");
    divcalc[0].style.borderColor = "var(--" + theme + "-border-color)";

    let divresult = document.getElementById("div-result");
    divresult.style.background = "var(--" + theme + "-default-bg)";
    divresult.style.color = "var(--" + theme + "-color-font-result)";

    let img_arrow = document.getElementById("img-arrow");
    img_arrow.style.background = "var(--" + theme + "-default-bg)";

    let img_search = document.getElementById("img-search");
    img_search.style.background = "var(--" + theme + "-default-bg)";
    //#endregion
    //#region footer 
    let border_footer = document.getElementsByTagName("footer");
    border_footer[0].style.borderColor = "var(--" + theme + "-border-color)";

    let copy = document.getElementById("copyright");
    copy.style.color = "var(--" + theme + "-color-font-copy)";
    //#endregion
})

function theme() {
    let mode;
    let memory = localStorage.getItem("status");
    if (memory == null)
        mode = "dark";
    else if (memory == "dark")
        mode = "light";
    else
        mode = "dark";

    localStorage.setItem("status", mode);
    document.location.reload();
}