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

    var IMG = "https://cutt.ly/itemList" + posicao;

    if (posicao => 0 && posicao <= 50)
    {
        document.getElementById("FOTO").src = IMG;
            document.getElementById("LINK").href = IMG;
    }

    FINAL();
}

function CODIGO () {

    const cod = [      
        /*00*/'980007472',
        /*01*/'326836',
        /*02*/'157427',
        /*03*/'980008473',
        /*04*/'980016684',
        /*05*/'722449',
        /*06*/'131592',
        /*07*/'321994',
        /*08*/'250879',
        /*09*/'226263',
        /*10*/'980012473',
        /*11*/'091962',
        /*12*/'980014286',
        /*13*/'631629',
        /*14*/'752168',
        /*15*/'396938',
        /*16*/'840908',
        /*17*/'980008232',
        /*18*/'310746',
        /*19*/'980012412',
        /*20*/'332065',
        /*21*/'980003563',
        /*22*/'980008161',
        /*23*/'463156',
        /*24*/'980008164',
        /*25*/'980008344',
        /*26*/'980003562',
        /*27*/'623681',
        /*28*/'177614',
        /*29*/'177607',
        /*30*/'378850',
        /*31*/'226151',
        /*32*/'166645',
        /*33*/'980008177',
        /*34*/'980015615',
        /*35*/'386711',
        /*36*/'227853',
        /*37*/'980014577',
        /*38*/'226158',
        /*39*/'628106',
        /*40*/'980007145',
        /*41*/'147339',
        /*42*/'372529',
        /*43*/'980003923',
        /*44*/'980015083',
        /*45*/'980004676',
        /*46*/'980013867',
        /*47*/'980010197',
        /*48*/'980016991',
        /*49*/'352107',
        /*50*/'980006066'
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
        '00 REMOVEDOR MM REGULAR 2X1L',
        '01 MOLHO POMAROLA TRADICIONAL 3X340GR',
        '02 CERA BRAVO LAMINADOS 3X750ML',
        '03 REXONA CLINICAL MEN 3X91GR', 
        '04 MOLHO POMAROLA SACHE SABORIZADO 3X300GR',
        '05 ABACAXI',
        '06 MELANCIA',
        '07 Limpol Liquido Natural 6x500ML',
        '08 Saponaceo Cremoso Pinho 1L',
        '09 LIMAO TAITI',
        '10 CREM TRAT REVLON UNIQ ONE 150ML',
        '11 BRAVO 3X500ML LUSTRA MOVEIS',
        '12 MANTA INFANTIL COM CAPUZ',
        '13 YPE LIQ 6X500ML DETERG LIQ CLEAR',
        '14 COCA COLA 6X1L',
        '15 Removedor Zulu Perfumado 2x900ML',
        '16 Limpol Gel Detergente Concentrado 3x511ML',
        '17 Saco Umbro',
        '18 Ketchup Heinz 2x397G',
        '19 Conjunto 3 Formas Para Gelo',
        '20 Miojo Nissin Galinha Caipira 6x75G',
        '21 Bacon Fatiado 200G',
        '22 VEJA LIMPEZA PESADA 2X1L',
        '23 Agua Minalba Premium Com Gas 300ML',
        '24 Destac Pisos Laminados 3x750ML',
        '25 Sapólio Radium 2x450ML',
        '26 KIT JAMON ESPANHOL HACIENDAS',
        '27 Pipoca de Mic Natural Com Sal Verm 2x100G',
        '28 Pipoca de Mic Natural Amarelo 2x100G',
        '29 Pipoca de Mic Manteiga Azul 2x100G',
        '30 Veja Cozinha 3x500ML',
        '31 Batata 2KG',
        '32 Bandeja Milho Verde',
        '33 Cerveja Wals Pilsen 600ML',
        '34 Jaqueta Masculina Guess',
        '35 ADOCANTE STEVIA 2X50GR',
        '36 Coco Verde',
        '37 Caneca Winx Zaini 33G',
        '38 Cebola 2KG',
        '39 Laranja 10KG',
        '40 Cenoura Baby 250G',
        '41 ASSADEIRA MM ALUMINIO 7.5L',
        '42 Kit Diversão Praia Com 19 Pecas',
        '43 Coca + Fanta',
        '44 Fanta Canada Dry',
        '45 Pijama M-C Masculino Lupo',
        '46 Vidal Tubes Azedinhos',
        '47 Pack 2 Top Triangulos Algodão Guess',
        '48 Lysoform Gatilho 500ML',
        '49 MOSTARDA HEINZ 2X255GR',
        '50 Party Cup MM Copo RED 20 Unidades',
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