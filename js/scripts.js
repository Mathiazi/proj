$(window).on('load', () => {
    $('.input-search').val( localStorage.getItem('item') );
    $('#email').val( localStorage.getItem('email') );
    $('#pass').val( localStorage.getItem('pass') );
});

$(Document).on('click', '#logo', () => { document.location.reload(); });

let statusMenu = true;
$(document).on('click', '#icon-menu', () => {

    let icon = $('#icon-menu');
    let menu = $('#menu-mobile');
    let ul = $('#ul-mobile');

    if (statusMenu == true) {
        menu.css({ 'display': 'block' });

        setTimeout(() => {

            ul.css({ 'display': 'block' });

        }, 500);

        icon.attr('src', './files/image/menu/close.png');
    }
    else {
        ul.css({ 'display': 'none' });

        setTimeout(() => {

            menu.css({ 'display': 'none' });

        }, 500);

        icon.attr('src', './files/image/menu/menu.png');
    }

    statusMenu = !statusMenu;
});

function calc() {
    const cod = document.getElementsByClassName('input-calc')[0].value;
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
        digito = 'upc';
    else
        digito = 'err';

    if (digito == 10)
        digito = 0;
    document.getElementById('div-result').innerText = digito;
}

function saveMemory() {
    localStorage.setItem('item', $('.input-search').val() );
    localStorage.setItem('email', $('#email').val() );
    localStorage.setItem('pass', $('#pass').val() );
}

$(document).on('click', '.clean', () =>  {
    localStorage.clear();
    document.location.reload();
});

function char(e) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode == 13)
        calc();
    else if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57)
            return false;
    }
}