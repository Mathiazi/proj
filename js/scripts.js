$(document).on('click', '#icon-logo', () => { document.location.reload(); });
$(document).on('click', '#div-cont', () => { $('#menu-mobile').fadeOut(); });

var panel = false;

$(document).on('click', '#icon-menu', () => {
    $('#form-login').fadeOut();
    $('#form-prod').fadeOut();
    
    if (panel == true)
        $('#menu-mobile').fadeOut();
    else
        $('#menu-mobile').fadeIn();

    panel = false;
});

$(document).on('click', '.icon-adm', () => {
    
    $('#menu-mobile').fadeOut();
    $('#form-login').fadeIn();

    panel = true;
});

function calc () {

    const cod = $('#input-calc').val();

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

    } else if (tamanho == 9) {

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

    } else if (tamanho == 13) {
        
        digito = 'upc';
    
    } else {

        digito = 'err';
    }

    if (digito == 10) {

        digito = 0;
    }

    $('#div-result').text(digito);
}

function char(e) {
    
    let charCode = e.charCode ? e.charCode : e.keyCode;
    
    if (charCode == 13) {
        
        calc();
    
    } else if (charCode != 8 && charCode != 9) {
        
        if (charCode < 48 || charCode > 57) {

            return false;
        }
    }
}