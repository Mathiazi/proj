window.addEventListener("load", () => {
    let item = document.getElementsByClassName("input-search")[0];
    item.value = localStorage.getItem("item");
    
    let userEmail = document.getElementById('userEmail');
    userEmail.value = localStorage.getItem("email");
}
);
let Status = true;
function menuMobile() {
    let menu = document.getElementById("menu-mobile").style;
    let ulMob = document.getElementById("ul-mobile").style;
    let icon = document.getElementById("icon-menu-mobile");
    if (Status) {
        menu.display = "block";
        setTimeout(() => { ulMob.display = "block"; }, 500);
        icon.src = "./files/image/menu/close.png";
    }
    else {
        ulMob.display = "none";  
        setTimeout(() => { menu.display = "none"; }, 400);
        icon.src = "./files/image/menu/menu.png";
    }
    Status = !Status;
    authClose();
}
function calc() {
    const cod = document.getElementsByClassName("input-calc")[0].value;
    const tamanho = cod.length;
    let digito;
    if (tamanho == 6) {
        digito = Number(cod.substr(1, 1)) +
            Number(cod.substr(3, 1)) +
            Number(cod.substr(5, 1));

        digito = (digito * 3) + Number(cod.substr(0, 1)) +
            Number(cod.substr(2, 1)) +
            Number(cod.substr(4, 1));
        digito = 10 - (digito % 10);
    }
    else if (tamanho == 9) {
        digito = Number(cod.substr(0, 1)) +
            Number(cod.substr(2, 1)) +
            Number(cod.substr(4, 1)) +
            Number(cod.substr(6, 1)) +
            Number(cod.substr(8, 1));

        digito = (digito * 3) + Number(cod.substr(1, 1)) +
            Number(cod.substr(3, 1)) +
            Number(cod.substr(5, 1)) +
            Number(cod.substr(7, 1));
        digito = 10 - (digito % 10);
    }
    else if (tamanho == 13)
        digito = "upc";
    else
        digito = "err";

    if (digito == 10)
        digito = 0;
    document.getElementById("div-result").innerText = digito;
}
function saveMemory() {
    let item = document.getElementsByClassName("input-search")[0].value;
    localStorage.setItem("item", item);

    let userEmail = document.getElementById('userEmail').value;
    localStorage.setItem("email", userEmail);
}
function clearMemory() {
    localStorage.clear();
    document.location.reload();
}
function char(e) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode == 13)
        calc();
    else if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57)
            return false;
    }
}