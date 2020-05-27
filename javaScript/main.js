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

        document.getElementById("input_digito").value=calc;
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

        document.getElementById("input_digito").value=calc;
    }
}