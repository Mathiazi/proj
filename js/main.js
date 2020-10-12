{
    $(document).ready(function(){

        $(window).load(function(){
            
            $('#preloader').fadeOut(2000);
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
        /*63*/'980001710',
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
        '00 pure picme 6x100g',
        '01 kit vho alt vista malbel 750 e 375ml',
        '02 conj 10 cabides de alumínio',
        '03 tênis infantil lk fila', 
        '04 cerveja brahma zero 12x350ml',
        '05 abacaxi pérola',
        '06 melancia',
        '07 limpol líquido natural 6x500ml',
        '08 saponaceo cremoso pinho 1l',
        '09 kit 3 bodies manga curta menino',
        '10 cafe 3 coracoes vp trad 4x500g',
        '11 cafe 3 coracoes vp extra forte 4x500g',
        '12 cerveja coronita extra 6x210ml',
        '13 cerveja corona 6x330ml',
        '14 água são lorenco com gás 6x510ml',
        '15 removedor zulu perfumado 2x900ml',
        '16 limpol gel detergente concentrado 3x511ml',
        '17 saco umbro',
        '18 ketchup heinz 2x397g',
        '19 conjunto 3 formas para gelo',
        '20 miojo nissin galinha caipira 6x75g',
        '21 bacon fatiado 200g',
        '22 choco mini pralinés lindt 100g',
        '23 agua minalba premium com gás 300ml',
        '24 destac pisos laminados 3x750ml',
        '25 sapólio radium 2x450ml',
        '26 creme avelã nutella 650g',
        '27 pipoca de mic natural com sal verm 2x100g',
        '28 pipoca de mic natural amarelo 2x100g',
        '29 pipoca de mic manteiga azul 2x100g',
        '30 veja cozinha 3x500ml',
        '31 batata 2KG',
        '32 bandeja milho verde',
        '33 cerveja wals pilsen 600ml',
        '34 jaqueta masculina guess',
        '35 cafe melita vp tradicional 4x500g',
        '36 coco verde',
        '37 caneca winx zaini 33g',
        '38 cebola 2kg',
        '39 laranja 10kg',
        '40 cenoura baby 250g',
        '41 dog chow duo integral 1kg',
        '42 kit diversão praia c/ 19pcs',
        '43 coca + fanta',
        '44 fanta canada dry',
        '45 pijama m/c masculino lupo',
        '46 vidal tubes azedinhos',
        '47 pack 2 top triangulos algodão guess',
        '48 lysoform gatilho 500ml',
        '49 algodão mm disco 1x100',
        '50 party cup mm copo red 20 unidades',
        '51 party cup mm copo blue 20 unidades',
        '52 fanta peach 355ml',
        '53 30 cabides pretos aveludados',
        '54 azeitona preta zapata members mark 500g',
        '55 jamon serrano 6.5kg',
        '56 guarda sol',
        '57 bisnaguinha pullman 300g',
        '58 gola de lã feminina',
        '59 vho giancarlo moscato 750ml',
        '60 granado - sabonete liquido glicerina 2x250ml',
        '61 manta infantil com capuz',
        '62 limão taiti',
        '63 fanta peach 355ml',
        '64 coca cola cherry 355ml',
        '65 sabonete granado glicerina 6x90g',
        '66 dueto suave',
        '67 mostarda heinz 2x255g',
        '68 adoçante stevia 2x50g',
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