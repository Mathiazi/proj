var obj = [
    { name: 'CERA BRAVO LAMINADOS 3X750ML', cod: '157427' },
    { name: 'REXONA CLINICAL MEN 3X91GR', cod: '980008473' }, 
    { name: 'ABACAXI', cod: '722449' },
    { name: 'MELANCIA', cod: '131592'},
    { name: 'LIMPOL LIQ NATURAL 6X500ML', cod: '321994'},
    { name: 'LIMAO TAITI', cod: '226263'},
    { name: 'CREM TRAT REVLON UNIQ ONE 150ML', cod: '980012473'},
    { name: 'BRAVO 3X500ML LUSTRA MOVEIS', cod: '091962'},
    { name: 'MANTA INFANTIL COM CAPUZ', cod: '980014286'},
    { name: 'YPE LIQ 6X500ML DETERG LIQ CLEAR', cod: '631629'},
    { name: 'COCA COLA 6X1L', cod: '752168'},
    { name: 'LIMPOL GEL CONCENTRADO 3X511ML', cod: '840908'},
    { name: 'SACO UMBRO', cod: '980008232'},
    { name: 'KETCHUP HEINZ 2X397G', cod: '310746'},
    { name: 'VEJA LIMPEZA PESADA 2X1L', cod: '980008161'},
    { name: 'KIT JAMON ESPANHOL HACIENDAS', cod: '980003562'},
    { name: 'PIPOCA C SAL VERM 2X100G', cod: '623681'},
    { name: 'PIPOCA C SAL AMARELO 2X100G', cod: '177614'},
    { name: 'PIPOCA C MANTEIGA AZUL 2X100G', cod: '177607'},
    { name:  'BATATA 2KG', cod: '226151'},
    { name: 'MILHO VERDE', cod: '166645'},
    { name: 'ADOCANTE STEVIA 2X50GR', cod: '386711'},
    { name: 'COCO VERDE', cod: '227853'},
    { name: 'CEBOLA 2KG', cod: '226158'},
    { name: 'LARANJA 10KG', cod: '628106'},
    { name: 'CENOURA BABY 250G', cod: '980007145'},
    { name: 'KIT PRAIA C 19 PEÇAS', cod: '372529'},
    { name: 'ASSADEIRA MM ALUMINIO 7.5L', cod: '980004676'},
    { name: 'MOSTARDA HEINZ 2X255GR', cod: '352107'},
    { name: 'KIT JAMON SERRANO HACIENDAS RES 6.5KG', cod: '980004882'},
    { name: 'PIJAMA M/C LUPO MASCULINO', cod: '980014772'},
    { name: 'AGUA BONAFONT S/G 24X500ML', cod: '224639'}
];

window.addEventListener ("load", function() {
        //carrega o item-list
        for (let index in obj) {
            
            let prod = obj[index].name;

            let newOpt = document.createElement("option");
                newOpt.value = prod;

            document.getElementById("itens").appendChild(newOpt);
        }
        //carrega o ultimo texto digitado no input-search
        let y = document.getElementsByClassName("input-search")[0];
            y.value = localStorage.getItem("item");
    }
);

//abre e fecha o menu mobile
let Status = true;
function menuMobile () {
    let menu = document.getElementById("menu-mobile").style;
    let ulMob = document.getElementById("ul-mobile").style;
    let icon = document.getElementById("icon-menu-mobile");
    if (Status) {
        menu.display = "block";
        menu.animationName = "openMenu";
        menu.animationDirection = "normal";

        setTimeout( () => {ulMob.display = "block";}, 500);

        icon.src = "./files/image/menu/close.png";
    }
    else {
        ulMob.display = "none";
        menu.animationName = "closeMenu";
        menu.animationDirection = "reverse";

        setTimeout( () => {menu.display = "none";}, 400);

        icon.src = "./files/image/menu/menu.png";
    }

    Status =! Status;
}
function calc () {
    const cod = document.getElementsByClassName("input-calc")[0].value;
    
    const tamanho = cod.length;

    var digito;

    if (tamanho == 6)
    {
        digito = Number(cod.substr(1, 1)) + 
                    Number(cod.substr(3, 1)) + 
                        Number(cod.substr(5, 1));
                        
        digito = (digito * 3) + Number(cod.substr(0, 1)) +
                                    Number(cod.substr(2, 1)) +
                                        Number(cod.substr(4, 1));
        digito = 10 - (digito % 10);

        if (digito == 10)
        {
            digito = 0;
        }
    }
    else if (tamanho == 9)
    {
        digito =  Number(cod.substr(0, 1)) + 
                    Number(cod.substr(2, 1)) + 
                        Number(cod.substr(4, 1)) + 
                            Number(cod.substr(6, 1)) + 
                                Number(cod.substr(8, 1));

        digito = (digito * 3) + Number(cod.substr(1, 1)) +
                                    Number(cod.substr(3, 1)) +
                                        Number(cod.substr(5, 1)) +
                                            Number(cod.substr(7, 1));
        digito = 10 - (digito % 10);

        if (digito == 10)
        {
            digito = 0;
        }
    }
    else { digito = ""; }

    document.getElementById("div-result").innerText = digito;
}
function getcodItem () {
    let equal = document.getElementsByClassName("input-search")[0].value;

    for (index in obj)
    {
        if ( obj[index].name.toLowerCase()  === equal.toLowerCase() )
        {
            let i =  obj[index];

            document.getElementsByClassName("input-calc")[0].value = i.cod;
        }
    }

    calc ();
}
//salva os dados na memoria
function saveMemory () {
    let item = document.getElementsByClassName("input-search")[0].value;
    localStorage.setItem("item", item);
}
//limpa a memoria
function clearMemory () {
    localStorage.clear();
    document.location.reload();
}
//bloqueia todos os chars, exceto numero
function char (e) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode == 13)
        calc ();
    else if (charCode != 8 && charCode != 9) {  
        if (charCode < 48 || charCode > 57)
            return false;
    }
}