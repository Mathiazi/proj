/**
 * Esta função irá carregar assim que todo o HTML da página estiver carregado!
 * Esta função não retorna nenhum valor.
 */
function main() {
    // Etapa: Variável do tipo constante para armazenar os produtos do estábelecimento. desta forma é melhor do que escrever outra <option> no HTML.
    const products = [
        'pure picme 6v100G',
        'kit vho alt vist malbel 750&375ml',
        'conj 10 cabides em alumin',
        'tênis infantil lk fila',
        'cerveja brahma zero 12v350ml',
        'abacaxi perola',
        'melancia',
        'limpol liq natural 6v500ml',
        'saponaceo cremoso pinho 1l',
        'kit 3 bodies man curt menino',
        'cafe 3 coracoes vp trad 4v500g',
        'cafe 3 coracoes vp ext fort 4v500g',
        'cerveja coronita extra 6v210ml',
        'cerveja corona 6v330ml',
        'agua sao lourenco c gas 6v510ml',
        'removedor zulu perfumado 2v900ml',
        'limpol gel deter concentrado 3v511ml',
        'saco umbro',
        'ketchup heinz 2v397g',
        'conj 3 formas p gelo',
        'miojo nissin gal caipira 6v75g',
        'bacon fatiado 200g',
        'choc mini pralinés lindt 100g',
        'agua minalba premium c gas 300ml',
        'destac pisos laminados 3v750ml',
        'sapolio radium 2v450ml',
        'creme avela nutella 650g',
        'pipoca de mic nat c sal verm 2v100g',
        'pipoca de mic nat amarelo 2v100g',
        'pipoca de mic manteiga azul 2v100g', 
        'veja cozinha 3v500ml',
        'batata 2kg',
        'bandeja milho verde',
        'cerveja wals pilsen 600ml'
    ];

    // Etapa: Laço de repetição que informa o produto unitário e o index do mesmo tentro do array { products }.
    products.forEach((product, index) => {
        // Etapa: Pega o ID do HTML que corresponda { dlist } e insere <option> com os valores da correspondentes.
        $('#dlist').append($('<option>', {
            value: `#${index < 10 ? `0${index}` : index} ${product}`,
            text: product
        }));
    });
};

function char(e) 
{
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9)
    {  
        if (charCode < 48 || charCode > 57)
        
        return false;
    }
}

function calcular() 
{
    var str = document.getElementById("input_item").value;

    // Etapa: Validação para que um campo não seja vázio ou nulo.
    if (!str || str === undefined || str === null) {
        alert('Para efetuar o calculo digite o código do produto!');
        return;
    }

    if (str.length == 9)
    {
        calc = Number(str.substr(0, 1)) + 
                    Number(str.substr(2, 1)) + 
                        Number(str.substr(4, 1)) + 
                            Number(str.substr(6, 1)) + 
                                Number(str.substr(8, 1));

        calc = (calc * 3) + Number(str.substr(1, 1)) +
                                Number(str.substr(3, 1)) +
                                    Number(str.substr(5, 1)) +
                                        Number(str.substr(7, 1));
        
        calc = 10 - (calc % 10);

        if (calc == 10)
        {
            calc = 0;
        }

        document.getElementById("lbl_resultado").innerHTML="O resultado é " + "'" + calc + "'.";
    }
    else if (str.length == 6)
    {
        calc = Number(str.substr(1, 1)) + 
                    Number(str.substr(3, 1)) + 
                        Number(str.substr(5, 1));

        calc = (calc * 3) + Number(str.substr(0, 1)) +
                                Number(str.substr(2, 1)) +
                                    Number(str.substr(4, 1));
        
        calc = 10 - (calc % 10);

        if (calc == 10)
        {
            calc = 0;
        }

        document.getElementById("lbl_resultado").innerHTML="O resultado é " + "'" + calc + "'.";
    }
}

function produtos() 
{
    var str = document.getElementById("input_pesquisa").value;

    // Etapa: Validação para que um campo não seja vázio ou nulo.
    if (!str || str === undefined || str === null) {
        alert('Um item da lista deve ser selecionado!');
        return;
    }

    var codigo = Number(str.substr(1, 2));

    var itens =
        [980012483, 980010188, 980014188,
            980014531, 264731, 722449,
                131592, 321994, 250879,
        395489, 228664, 228657,
            980013689, 980013849, 499404,
                396938,840908, 980008232,
        310746,980012412, 332065,
            980003563, 980014457, 463156,
                980008164, 980008344, 332992,
        623681, 177614, 177607,
            378850, 226151, 166645,
                980008177];

    var verifica = itens[codigo];

    if (verifica == undefined)
    {
        document.getElementById("lbl_resultado").innerHTML = "Erro ao calcular :(";
    }
    else
    {
        document.getElementById("input_item").value = verifica;

        calcular();
    }
}