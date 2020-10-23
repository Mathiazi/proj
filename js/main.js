{
    $(document).ready(function(){

        $(window).load(function(){
            
            $('#preloader').fadeOut(400);
        });
        
    });
}
function obter_final() {
    const cod = document.getElementById("input_item").value;
    
    const tamanho = cod.length;

    var status, digito;

    if (tamanho != 6 & tamanho != 9) {
        if (tamanho == 0) {
            status = 'Digite a numeração do item ...';
        }
        else {
            status = 'O item é inválido ...';
        }
    }
    else if (tamanho == 6) {
        digito = Number(cod.substr(1, 1)) + 
                    Number(cod.substr(3, 1)) + 
                        Number(cod.substr(5, 1));

        digito = (digito * 3) + Number(cod.substr(0, 1)) +
                                    Number(cod.substr(2, 1)) +
                                        Number(cod.substr(4, 1));
        digito = 10 - (digito % 10);

        if (digito == 10) {
            digito = 0;
        }

        status = "O dígito final é '" + digito + "'.";
    }
    else {
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

        if (digito == 10) {
            digito = 0;
        }

        status = "O dígito final é '" + digito + "'.";
    }
    document.getElementById("lbl_resultado").innerHTML = status;
}
function obter_codigo() {

    var status = document.getElementById("lbl_resultado");

    const cod = [      
        /*00*/'980012483',
        /*01*/'980010188',
        /*02*/'980014188',
        /*03*/'980014531',
        /*04*/'264731',
        /*05*/'722449',
        /*06*/'131592',
        /*07*/'321994',
        /*08*/'250879',
        /*09*/'395489',
        /*10*/'228664',
        /*11*/'228657',
        /*12*/'980013689',
        /*13*/'980013849',
        /*14*/'499404',
        /*15*/'396938',
        /*16*/'840908',
        /*17*/'980008232',
        /*18*/'310746',
        /*19*/'980012412',
        /*20*/'332065',
        /*21*/'980003563',
        /*22*/'980014457',
        /*23*/'463156',
        /*24*/'980008164',
        /*25*/'980008344',
        /*26*/'332992',
        /*27*/'623681',
        /*28*/'177614',
        /*29*/'177607',
        /*30*/'378850',
        /*31*/'226151',
        /*32*/'166645',
        /*33*/'980008177',
        /*34*/'980015615',
        /*35*/'204527',
        /*36*/'227853',
        /*37*/'980014577',
        /*38*/'226158',
        /*39*/'628106',
        /*40*/'980007145',
        /*41*/'147339',
        /*42*/'372529',
        /*43*/'980003923',
        /*44*/'980015083',
        /*45*/'980014772',
        /*46*/'980013867',
        /*47*/'980010197',
        /*48*/'980016991',
        /*49*/'980005183',
        /*50*/'980006066',
        /*51*/'980006065',
        /*52*/'980001710',
        /*53*/'980001746',
        /*54*/'980006175',
        /*55*/'980004882',
        /*56*/'980004138',
        /*57*/'886396',
        /*58*/'980014527',
        /*59*/'980000485',
        /*60*/'103360',
        /*61*/'980014286',
        /*62*/'226263',
        /*63*/'980012690',
        /*64*/'980015086',
        /*65*/'391282',
        /*66*/'980007173',
        /*67*/'352107',
        /*68*/'386711',
        /*69*/'980008161',
        /*70*/'980002601',
        /*71*/'980014743'
    ];

    const item_selecionado = document.getElementById("input_pesquisa").value;
          
    if (item_selecionado == "") {
        status.innerHTML = "Pesquise um item pré-definido ...";
    }
    else{
        const posicao = Number(item_selecionado.substr(0, 2));
        
        const verifica = cod[posicao];
    
        if (verifica == undefined) {
            status.innerHTML = "O item não foi encontrado ...";
        }
        else {
            document.getElementById("input_item").value = verifica;
    
            obter_final();
        }
    }
}
function carregar_itens() {

    const itens = [
        '00 pure picme 6x100G',
        '01 kit vho alt vista malbel 750 e 375ML',
        '02 conj 10 cabides de alumínio',
        '03 tênis infantil lk fila', 
        '04 cerveja brahma zero 12x350ML',
        '05 abacaxi pérola',
        '06 melancia',
        '07 limpol líquido natural 6x500ML',
        '08 saponaceo cremoso pinho 1l',
        '09 kit 3 bodies manga curta menino',
        '10 cafe 3 coracoes vp trad 4x500G',
        '11 cafe 3 coracoes vp extra forte 4x500G',
        '12 cerveja coronita extra 6x210ML',
        '13 cerveja corona 6x330ML',
        '14 água são lorenco com gás 6x510ML',
        '15 removedor zulu perfumado 2x900ML',
        '16 limpol gel detergente concentrado 3x511ML',
        '17 saco umbro',
        '18 ketchup heinz 2x397G',
        '19 conjunto 3 formas para gelo',
        '20 miojo nissin galinha caipira 6x75G',
        '21 bacon fatiado 200G',
        '22 choco mini pralinés lindt 100G',
        '23 agua minalba premium com gás 300ML',
        '24 destac pisos laminados 3x750ML',
        '25 sapólio radium 2x450ML',
        '26 creme avelã nutella 650G',
        '27 pipoca de mic natural com sal verm 2x100G',
        '28 pipoca de mic natural amarelo 2x100G',
        '29 pipoca de mic manteiga azul 2x100G',
        '30 Veja Cozinha 3x500ML',
        '31 Batata 2KG',
        '32 Bandeja Milho Verde',
        '33 Cerveja Wals Pilsen 600ML',
        '34 Jaqueta Masculina Guess',
        '35 Cafe Melita VP Tradicional 4x500G',
        '36 Coco Verde',
        '37 Caneca Winx Zaini 33G',
        '38 Cebola 2KG',
        '39 Laranja 10KG',
        '40 Cenoura Baby 250G',
        '41 Dog Chow Duo Integral 1KG',
        '42 Kit Diversão Praia Com 19 Pecas',
        '43 Coca + Fanta',
        '44 Fanta Canada Dry',
        '45 Pijama M-C Masculino Lupo',
        '46 Vidal Tubes Azedinhos',
        '47 Pack 2 Top Triangulos Algodão Guess',
        '48 Lysoform Gatilho 500ML',
        '49 Algodão MM Disco 1x100',
        '50 Party Cup MM Copo RED 20 Unidades',
        '51 Party Cup MM Copo Blue 20 Unidades',
        '52 Fanta Peach 355ML',
        '53 30 Cabides Pretos Aveludados',
        '54 Azeitona Preta Zapata Members Mark 500G',
        '55 Jamon Serrano 6.5KG',
        '56 Guarda Sol',
        '57 Bisnaguinha Pullman 300G',
        '58 Gola De Lã Feminina',
        '59 Vho Giancarlo Moscato 750ML',
        '60 Granado - Sabonete Liquido Glicerina 2x250ML',
        '61 Manta Infantil Com Capuz',
        '62 Limão Taiti',
        '63 Mesa Dobravel 1.8METROS',
        '64 Coca Cola Cherry 355ML',
        '65 Sabonete Granado Glicerina 6x90G',
        '66 Dueto Suave',
        '67 Mostarda Heinz 2x255G',
        '68 Adocante Stevia 2x50G',
        '69 Veja Limpeza Pesada 2x1L',
        '70 Dove Men Care Cuidado Total 3x89G',
        '71 Fanta Lemon 330ML'
    ];

    const lista = document.getElementById('lista');

    itens.forEach(
        item => {
            let option = document.createElement('option');
            
            option.value = item;
            
            lista.appendChild(option); 
        }
    );
}
function char(e) { 

    var charCode = e.charCode ? e.charCode : e.keyCode;
    
    if (charCode==13){
    
        obter_final();
    }
    else if (charCode != 8 && charCode != 9) {  
        
        if (charCode < 48 || charCode > 57) {

            return false;
        }
    }
}