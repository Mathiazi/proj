function FINAL ()
{
    const cod = document.getElementById("ITEM").value;
    
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
    else {
        digito = '?';
    }

    document.getElementById("BOTAO1").innerHTML = digito;
}

var posicao;

function PRECO () {

    var IMG = "https://cutt.ly/mathi" + posicao;

    if (posicao => 0 && posicao <= 50)
    {
        document.getElementById("FOTO").src = IMG;
            document.getElementById("LINK").href = IMG;
    }

    FINAL();
}

function CODIGO () {

    const cod = [
        /*01*/'157427',
        /*02*/'980008473',
        /*03*/'722449',
        /*04*/'131592',
        /*05*/'321994',
        /*06*/'226263',
        /*07*/'980012473',
        /*08*/'091962',
        /*09*/'980014286',
        /*10*/'631629',
        /*11*/'752168',
        /*12*/'840908',
        /*13*/'980008232',
        /*14*/'310746',
        /*15*/'980008161',
        /*16*/'980003562',
        /*17*/'623681',
        /*18*/'177614',
        /*19*/'177607',
        /*20*/'226151',
        /*21*/'166645',
        /*22*/'386711',
        /*23*/'227853',
        /*24*/'226158',
        /*25*/'628106',
        /*26*/'980007145',
        /*27*/'372529',
        /*28*/'980004676',
        /*29*/'352107'
    ];

    var status = document.getElementById("BOTAO2");

    const item_selecionado = document.getElementById("ITENS").value;
          
    if (item_selecionado == "")
    {
        status.innerHTML = "?";
    }
    else
    {
        posicao = Number(item_selecionado.substr(0, 2));
        
        const verifica = cod[posicao];
    
        if (verifica == undefined)
        {
            status.innerHTML = "-";
        }
        else
        {
            status.innerHTML = ">";

            document.getElementById("ITEM").value = verifica;
    
            PRECO();
        }
    }
}

function CARREGAR_LISTA () {

    const itens = [
        '01 CERA BRAVO LAMINADOS 3X750ML',
        '02 REXONA CLINICAL MEN 3X91GR', 
        '03 ABACAXI',
        '04 MELANCIA',
        '05 LIMPOL LIQ NATURAL 6X500ML',
        '06 LIMAO TAITI',
        '07 CREM TRAT REVLON UNIQ ONE 150ML',
        '08 BRAVO 3X500ML LUSTRA MOVEIS',
        '09 MANTA INFANTIL COM CAPUZ',
        '10 YPE LIQ 6X500ML DETERG LIQ CLEAR',
        '11 COCA COLA 6X1L',
        '12 LIMPOL GEL CONCENTRADO 3X511ML',
        '13 SACO UMBRO',
        '14 KETCHUP HEINZ 2X397G',
        '15 VEJA LIMPEZA PESADA 2X1L',
        '16 KIT JAMON ESPANHOL HACIENDAS',
        '17 PIPOCA C SAL VERM 2X100G',
        '18 PIPOCA C SAL AMARELO 2X100G',
        '19 PIPOCA C MANTEIGA AZUL 2X100G',
        '20 BATATA 2KG',
        '21 MILHO VERDE',
        '22 ADOCANTE STEVIA 2X50GR',
        '23 COCO VERDE',
        '24 CEBOLA 2KG',
        '25 LARANJA 10KG',
        '26 CENOURA BABY 250G',
        '27 KIT PRAIA C 19 PEÇAS',
        '28 ASSADEIRA MM ALUMINIO 7.5L',
        '29 MOSTARDA HEINZ 2X255GR'
    ];

    const lista = document.getElementById('lista');

    itens.forEach
    (
        item => {
            let option = document.createElement('option');
            
            option.value = item;
            
            lista.appendChild(option); 
        }
    );
}

function BLOQUEIO (e) { 

    var charCode = e.charCode ? e.charCode : e.keyCode;
    
    if (charCode==13)
    {
        FINAL();
    }
    else if (charCode != 8 && charCode != 9)
    {  
        if (charCode < 48 || charCode > 57)
        {
            return false;
        }
    }
}