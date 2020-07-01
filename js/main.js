function char(e) { 
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {  
        if (charCode < 48 || charCode > 57)
        
        return false;
    }
}
function obter_final() {
    const cod = document.getElementById("input_item").value;
    
    const tamanho = cod.length;

    var status, digito;

    if (tamanho != 6 & tamanho != 9) {
        if (tamanho == 0) {
            status = 'Digite o código do item ...';
        }
        else {
            status = 'O código do item é inválido ...';
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

        status = "O digito final é '" + digito + "'.";
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

        status = "O resultado do calculo é '" + digito + "'.";
    }
    document.getElementById("lbl_resultado").innerHTML = status;
}
function obter_codigo() {

    const cod = [      
        '980012483',
                
            '980010188',
                
        '980014188',
                
            '980014531',
                
        '264731',
            
            '722449',
                
        '131592',
            
            '321994',
                
        '250879',
        
            '395489',
        
        '228664',
        
            '228657',
        
        '980013689',
        
            '980013849',
        
        '499404',
        
            '396938',
        
        '840908',
        
            '980008232',
        
        '310746',
        
            '980012412',
        
        '332065',
        
            '980003563',
        
        '980014457',
        
            '463156',
        
        '980008164',
        
            '980008344',
        
        '332992',
        
            '623681',
        
        '177614',
        
            '177607',
        
        '378850',
        
            '226151',
        
        '166645',
        
            '980008177',
        
        '980015615',
        
            '204527',
        
        '227853',
        
            '980014577',
        
        '226158',
        
            '628106',
        
        '980007145',
        
            '147339',
        
        '372529',

            '980003923',
        
        '980015083'
    ];

    const item_selecionado = document.getElementById("input_pesquisa").value;
          
    if (item_selecionado == "") {
        document.getElementById("lbl_resultado").innerHTML = "Pesquise um item para continuar...";
    }
    else{
        const posicao = Number(item_selecionado.substr(0, 2));
        
        const verifica = cod[posicao];
    
        if (verifica == undefined) {
            document.getElementById("lbl_resultado").innerHTML = "O item não encontrado :(";
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

        '01 kit vho alt vist malbel 750 e 375ml',

        '02 conj 10 cabides de alumínio',

        '03 tênis infantil lk fila', 
        
        '04 cerveja brahma zero 12x350ml',
        
        '05 abacaxi pérola',
        
        '06 melancia',
        
        '07 limpol liquido natural 6x500ml',
        
        '08 saponaceo cremoso pinho 1l',
        
        '09 kit 3 bodyes manga curta menino',
        
        '10 cafe 3 coracoes vp trad 4x500g',
        
        '11 cafe 3 coracoes vp extra forte 4x500g',
        
        '12 cerveja coronita extra 6x210ml',
        
        '13 cerveja corona 6x330ml',
       
        '14 água são lorenco com gás 6x510ml',
       
        '15 removedor zulu perfumado 2x900ml',
       
        '16 limpol gel detergente concentrado 3x511ml',
       
        '17 saco umbro',
       
        '18 ketchup heinz 2x397G',
       
        '19 conjunto 3 formas para gelo',
       
        '20 miojo nissin galinha caipira 6x75G',
       
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
       
        '34 jaqueta masculina gues',
       
        '35 cafe melira vp tradicional 4x500g',
       
        '36 coco verde',
       
        '37 caneca winx zaini 33G',
       
        '38 cebola 2KG',
       
        '39 laranja 10KG',
       
        '40 cenoura baby 250g',
       
        '41 dog chow duo integral 1kg',
       
        '42 kit diversão praia c/ 19pcs',

        '43 coca + fanta',

        '44 fanta canada dry'
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