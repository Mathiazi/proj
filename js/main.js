/**
 * Esta função irá carregar assim que todo o HTML da página estiver carregado!
 * Esta função não retorna nenhum valor.
 */
function main() {
    fetch('https://us-central1-item-list-281621.cloudfunctions.net/get-items')
        .then((response) => {
            // Etapa: Transforma a resposta do back-end em JSON.
            return response.json();
        })
        .then((products) => {
            // Etapa: Laço de repetição que informa o produto unitário e o index do mesmo tentro do array { products }.
            products.forEach((product, index) => {
                if (product.title) {
                    // Etapa: Pega o ID do HTML que corresponda { produtos } e insere <option> com os valores da correspondentes.
                    $('#produtos').append($('<option>', {
                        value: `${index < 10 ? `0${index}` : index} ${product.title.toUpperCase()}`,
                        text: product.title.toUpperCase()
                    }));
                }
            });

            // Etapa: Desativa o loading da tela assim que todos os dados são carregados!
            document.getElementById('loading').style.display = 'none';
        })
        .catch((err) => console.log(err));
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
    const str = document.getElementById("input_item").value;

    // Etapa: Validação para que um campo não seja vázio ou nulo.
    if (!str || str === undefined || str === null) {
        alert('Para efetuar o calculo digite o código do produto!');
        return;
    }

    var i = (str.length);

    var resposta, calc;

    if (i != 6 & i != 9)
    {
        if (i == 0)
        {
            resposta = 'Digite o código do item ...';
        }
        else
        {
            resposta = 'O código do item é inválido ...';
        }
    }  
    else if (i == 6)
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

        resposta = "O resultado do calculo é '" + calc + "'.";
    }
    else
    {
        calc =  Number(str.substr(0, 1)) + 
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

        resposta = "O resultado do calculo é '" + calc + "'.";
    }

    document.getElementById("lbl_resultado").innerHTML = resposta;
}

function produtos() 
{
    var str = document.getElementById("input_pesquisa").value;

    // Etapa: Validação para que um campo não seja vázio ou nulo.
    if (!str || str === undefined || str === null) {
        alert('Um item da lista deve ser selecionado!');
        return;
    }

    var codigo = Number(str.substr(0, 2));

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
                980008177, 980015615, 204527,
        227853, 980014577, 226158,
            628106, 980007145, 147339, 372529];

    var verifica = itens[codigo];

    if (verifica == undefined)
    {
        document.getElementById("lbl_resultado").innerHTML = "Item não encontrado :(";
    }
    else
    {
        document.getElementById("input_item").value = verifica;

        calcular();
    }
}