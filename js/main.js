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
        /*00*/'157427',
        /*01*/'980008473',
        /*02*/'722449',
        /*03*/'131592',
        /*04*/'321994',
        /*05*/'226263',
        /*06*/'980012473',
        /*07*/'091962',
        /*08*/'980014286',
        /*09*/'631629',
        /*10*/'752168',
        /*11*/'840908',
        /*12*/'980008232',
        /*13*/'310746',
        /*14*/'980008161',
        /*15*/'980003562',
        /*16*/'623681',
        /*17*/'177614',
        /*18*/'177607',
        /*19*/'226151',
        /*20*/'166645',
        /*21*/'386711',
        /*22*/'227853',
        /*23*/'226158',
        /*24*/'628106',
        /*25*/'980007145',
        /*26*/'372529',
        /*27*/'980004676',
        /*28*/'352107'
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
        '00 CERA BRAVO LAMINADOS 3X750ML',
        '01 REXONA CLINICAL MEN 3X91GR', 
        '02 ABACAXI',
        '03 MELANCIA',
        '04 LIMPOL LIQ NATURAL 6X500ML',
        '05 LIMAO TAITI',
        '06 CREM TRAT REVLON UNIQ ONE 150ML',
        '07 BRAVO 3X500ML LUSTRA MOVEIS',
        '08 MANTA INFANTIL COM CAPUZ',
        '09 YPE LIQ 6X500ML DETERG LIQ CLEAR',
        '10 COCA COLA 6X1L',
        '11 LIMPOL GEL CONCENTRADO 3X511ML',
        '12 SACO UMBRO',
        '13 KETCHUP HEINZ 2X397G',
        '14 VEJA LIMPEZA PESADA 2X1L',
        '15 KIT JAMON ESPANHOL HACIENDAS',
        '16 PIPOCA C SAL VERM 2X100G',
        '17 PIPOCA C SAL AMARELO 2X100G',
        '18 PIPOCA C MANTEIGA AZUL 2X100G',
        '19 BATATA 2KG',
        '20 MILHO VERDE',
        '21 ADOCANTE STEVIA 2X50GR',
        '22 COCO VERDE',
        '23 CEBOLA 2KG',
        '24 LARANJA 10KG',
        '25 CENOURA BABY 250G',
        '26 KIT PRAIA C 19 PEÇAS',
        '27 ASSADEIRA MM ALUMINIO 7.5L',
        '28 MOSTARDA HEINZ 2X255GR'
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