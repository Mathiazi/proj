let obj =
    [
        {
            name: 'CERA BRAVO LAMINADOS 3X750ML',
                cod: '157427',
                    image: 'https://cutt.ly/itemSams-0'},
        {
            name: 'REXONA CLINICAL MEN 3X91GR',
                cod: '980008473',
                    image: 'https://cutt.ly/itemSams-1'}, 
        {
            name: 'ABACAXI',
                cod: '722449',
                    image: 'https://cutt.ly/itemSams-2'},
        {
            name: 'MELANCIA',
                cod: '131592',
                    image: 'https://cutt.ly/itemSams-3'},
        {
            name: 'LIMPOL LIQ NATURAL 6X500ML',
                cod: '321994',
                    image: 'https://cutt.ly/itemSams-4'},
        {
            name: 'LIMAO TAITI',
                cod: '226263',
                    image: 'https://cutt.ly/itemSams-5'},
        {
            name: 'CREM TRAT REVLON UNIQ ONE 150ML',
                cod: '980012473',
                    image: 'https://cutt.ly/itemSams-6'},
        {
            name: 'BRAVO 3X500ML LUSTRA MOVEIS',
                cod: '091962',
                    image: 'https://cutt.ly/itemSams-7'},
        {
            name: 'MANTA INFANTIL COM CAPUZ',
                cod: '980014286',
                    image: 'https://cutt.ly/itemSams-8'},
        {
            name: 'YPE LIQ 6X500ML DETERG LIQ CLEAR',
                cod: '631629',
                    image: 'https://cutt.ly/itemSams-9'},
        {
            name: 'COCA COLA 6X1L',
                    cod: '752168',
                        image: 'https://cutt.ly/itemSams-10'},
        {
            name: 'LIMPOL GEL CONCENTRADO 3X511ML',
                cod: '840908',
                    image: 'https://cutt.ly/itemSams-11'},
        {
            name: 'SACO UMBRO',
                cod: '980008232',
                    image: 'https://cutt.ly/itemSams-12'},
        {
            name: 'KETCHUP HEINZ 2X397G',
                cod: '310746',
                    image: 'https://cutt.ly/itemSams-13'},
        {
            name: 'VEJA LIMPEZA PESADA 2X1L',
                cod: '980008161',
                    image: 'https://cutt.ly/itemSams-14'},
        {
            name: 'KIT JAMON ESPANHOL HACIENDAS',
                cod: '980003562',
                    image: 'https://cutt.ly/itemSams-15'},
        {
            name: 'PIPOCA C SAL VERM 2X100G',
                cod: '623681',
                    image: 'https://cutt.ly/itemSams-16'},
        {
            name: 'PIPOCA C SAL AMARELO 2X100G',
                cod: '177614',
                    image: 'https://cutt.ly/itemSams-17'},
        {
            name: 'PIPOCA C MANTEIGA AZUL 2X100G',
                cod: '177607',
                    image: 'https://cutt.ly/itemSams-18'},
        {
            name:  'BATATA 2KG',
                cod: '226151',
                    image: 'https://cutt.ly/itemSams-19'},
        {
            name: 'MILHO VERDE',
                cod: '166645',
                    image: 'https://cutt.ly/itemSams-20'},
        {
            name: 'ADOCANTE STEVIA 2X50GR',
                cod: '386711',
                    image: 'https://cutt.ly/itemSams-21'},
        {
            name: 'COCO VERDE',
                cod: '227853',
                    image: 'https://cutt.ly/itemSams-22'},
        {
            name: 'CEBOLA 2KG',
                cod: '226158',
                    image: 'https://cutt.ly/itemSams-23'},
        {
            name: 'LARANJA 10KG',
                cod: '628106',
                    image: 'https://cutt.ly/itemSams-24'},
        {
            name: 'CENOURA BABY 250G',
                cod: '980007145',
                    image: 'https://cutt.ly/itemSams-25'},
        {
            name: 'KIT PRAIA C 19 PEÇAS',
                cod: '372529',
                    image: 'https://cutt.ly/itemSams-26'},
        {
            name: 'ASSADEIRA MM ALUMINIO 7.5L',
                cod: '980004676',
                    image: 'https://cutt.ly/itemSams-27'},
        {
            name: 'MOSTARDA HEINZ 2X255GR',
                cod: '352107',
                    image: 'https://cutt.ly/itemSams-28'},
        {
            name: 'KIT JAMON SERRANO HACIENDAS RES 6.5KG',
                cod: '980004882',
                    image: 'https://cutt.ly/itemSams-29'},
        {
            name: 'PIJAMA M/C LUPO MASCULINO',
                cod: '980014772',
                    image: 'https://cutt.ly/itemSams-30'}  
    ];
window.addEventListener ("load", function loadList ()
    {
        for (index in obj)
        {
            var prod = obj[index].name.toLowerCase();

            let newObj = document.createElement("option");
            newObj.value = prod;

            let i = document.getElementById("itens");
            i.appendChild(newObj);
        }

        loadMemory ();
    }
);
window.addEventListener ("load", function imgGit ()
    {
        //brincando com o js :]
        
        let i;

        //adiciono o id imgGit ao elemento
        i = document.getElementsByTagName("img")[6].setAttribute("id", "imgGit");
        //chamo novamente a funcao com o id que foi criado
        i = document.getElementById("imgGit");
        //adiciono o endereco para chamar a img
        i.src = "./assets/icon/github.png"
        //altero apenas o tamanho, assim a altura se mantem proporcional
        i.style.width = "34px";
        //flutua para direita
        i.style.float = "right";
        //afasto um pouco da borda
        i.style.margin = "55px 6px 0 0";
        //altero o estilo do cursor
        i.style.cursor = "pointer";
        //agora altero o i para setar o elemento pai, chamando o index referente a imagem
        i =  document.getElementsByTagName("a")[1];
        //adiciono o target para abrir o link em uma nova pagina
        i.setAttribute("target", "_blank");
        //adiciono o link fererente ao git
        i.setAttribute("href", "https://github.com/mathiazi");

        //chega né, era mais simples pelo css :)
    }
);

function loadTheme () {

    let y = localStorage.getItem("status");

    if (y == null)
        y = "light"

    let header = document.getElementsByTagName("header")[0];
            header.style.background = "var(--" + y + "-header-bg)";

    let nav = document.getElementsByTagName("nav")[0];
            nav.style.background = "var(--" + y + "-nav-bg)";
            
    let clean = document.getElementById("clean");
            clean.style.background = "var(--" + y + "-clean-bg)";
    
    let main = document.getElementsByTagName("main")[0];
            main.style.background = "var(--" + y + "-main-bg)";
    
    let lblName = document.getElementById("lblName");
            lblName.style.color = "var(--" + y + "-lblName-color)";

    let h1 = document.getElementsByTagName("h1");
            h1[0].style.color = "var(--" + y + "-h1-color)";
                h1[1].style.color = "var(--" + y + "-h1-color)";

    let codItem = document.getElementById("codItem");
            codItem.style.background = "var(--" + y + "-codItem-bg)";

    let list = document.getElementById("list");
            list.style.background = "var(--" + y + "-list-bg)";
                list.style.color = "var(--" + y + "-list-color)";

    let footer = document.getElementsByTagName("footer")[0];
            footer.style.borderTopColor = "var(--" + y + "-border-top-color)";
                footer.style.background = "var(--" + y + "-footer-bg)";
    
    let lblStatus = document.getElementsByClassName("lblStatus");
            lblStatus[0].style.color = "var(--" + y + "-lblStatus-color)";
                lblStatus[1].style.color = "var(--" + y + "-lblStatus-color)";
                    lblStatus[2].style.color = "var(--" + y + "-lblStatus-color)";
    
    let lblCopy = document.getElementById("lblCopy");
            lblCopy.style.color = "var(--" + y + "-lblCopy-color)";
                lblCopy.style.background = "var(--" + y + "-lblCopy-bg)";
}
function selectTheme () {

    let y = localStorage.getItem("status");

    let mode;

    if (y == null)
    {
        mode = "dark";
    }
    else if (y == "dark")
    {
        mode = "light";
    }
    else
    {
        mode = "dark";
    }
        
    localStorage.setItem("status", mode)

    loadTheme ();
}

function loadMemory () {
    let y = document.getElementById("list");

    y.value = localStorage.getItem("item");
}
function clearMemory () {
    localStorage.clear();
        document.location.reload();
}

let men;
function menu () {

    men =! men;

    let y = document.getElementsByTagName("nav")[0];

    if (men) {
        y.style.display = "none";
    }
    else {
        y.style.display = "block"
    }
}

function calc () {
    const cod = document.getElementById("codItem").value;
    
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
        digito = 'N';
    }

    document.getElementById("btnResult").innerText = digito;
}
function cod () {
    let equal = document.getElementById("list").value;

    for (index in obj)
    {
        if ( obj[index].name.toLowerCase()  === equal.toLowerCase() )
        {
            let i =  obj[index];

            document.getElementById("codItem").value = i.cod;

            document.getElementById("imgProd").src = i.image;
        }
    }

    calc();
}

function saveMemory () {
    let item = document.getElementById("list").value;
    
    localStorage.setItem("item", item);
}

function char (e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    
    if (charCode == 13)
    {
        	calc ();
    }
    else if (charCode != 8 && charCode != 9)
    {  
        if (charCode < 48 || charCode > 57)
        {
            return false;
        }
    }
}