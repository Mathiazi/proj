function theme () {
    let theme = localStorage.getItem("status");

    if (theme == null)
        theme = "light";

    //#region header
        let header = document.getElementsByTagName("header");
        header[0].style.background = "var(--" + theme + "-header-bg)";
        header[0].style.color = "var(--" + theme + "-color-font)";

        let submenu = document.getElementById("subMenu");
        submenu.style.background = "var(--" + theme + "-header-bg)";
        submenu.style.borderColor = "var(--" + theme + "-border-color)";

        let a = document.getElementsByTagName("a");
        a[0].style.color = "var(--" + theme + "-color-font)";
        a[1].style.color = "var(--" + theme + "-color-font)";
        
        let border_li = document.querySelectorAll("#subMenu>ul>li");
        border_li[0].style.borderColor = "var(--" + theme + "-border-color)";
        border_li[1].style.borderColor = "var(--" + theme + "-border-color)";
        border_li[2].style.borderColor = "var(--" + theme + "-border-color)";
    //#endregion
    //#region main
        let body = document.getElementsByTagName("body");
        body[0].style.backgroundImage = "url('./files/image/" + theme + "-bg.png')";

        let divcont = document.getElementById("div-cont");
        divcont.style.background = "var(--" + theme + "-divcont-bg)"

        let lbl = document.getElementsByTagName("label");
        lbl[0].style.color = "var(--" + theme + "-color-font-appweb)";
        lbl[1].style.color = "var(--" + theme + "-color-font-log)";
        lbl[2].style.color = "var(--" + theme + "-color-font-log)";
        lbl[3].style.color = "var(--" + theme + "-color-font-up)";

        let copy = document.getElementById("copyright");
        copy.style.color = "var(--" + theme + "-color-font-copy)";

        let h1 = document.getElementsByTagName("h1");
        h1[0].style.color = "var(--" + theme + "-color-font-h1)";
        h1[1].style.color = "var(--" + theme + "-color-font-h1)";

        let input = document.getElementsByClassName("inp");
        input[0].style.background = "var(--" + theme + "-inp-bg)";
        input[0].style.color = "var(--" + theme + "-inp-font-color)";
        input[1].style.background = "var(--" + theme + "-inp-bg)";
        input[1].style.color = "var(--" + theme + "-inp-font-color)";

        let divcalc = document.getElementsByClassName("div-calc");
        divcalc[0].style.borderColor = "var(--" + theme + "-border-color)";

        let divresult = document.getElementById("div-result");
        divresult.style.color = "var(--" + theme + "-inp-font-color)";
        divresult.style.background = "var(--" + theme + "-default-bg)";

        let img_arrow = document.getElementById("img-arrow");
        img_arrow.style.background = "var(--" + theme + "-default-bg)";

        let img_search = document.getElementById("img-search");
        img_search.style.background = "var(--" + theme + "-default-bg)";
    //#endregion
    //#region footer 
        let border_footer = document.getElementsByTagName("footer");
        border_footer[0].style.borderColor = "var(--" + theme + "-border-color)";
    //#endregion
}

function changeTheme () {
    
    let mode;

    let x = localStorage.getItem("status");
    if (x == null) {
        mode = "dark";
    }

    else if (x == "dark") {
        mode = "light";
    }
        
    else {
        mode = "dark";
    }  
        
    localStorage.setItem("status", mode)

    theme ();
}