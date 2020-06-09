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