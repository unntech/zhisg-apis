// JavaScript Document

function change_display(divname,show){
	document.getElementById(divname).style.display = show;
}

function IsNumber(str)
{
	//return str.match(/^[0-9]*$/)!=null;
	return str.match(/^[+|-]?[0-9]*[.]?[0-9]*$/)!=null;
}

function ReturnNum(id)
{
	var s =document.getElementById(id).value;	
	//return str.match(/^[+|-]?[0-9]*[.]?[0-9]*$/)!=null;
	if (s.match(/^[+|-]?[0-9]*[.]?[0-9]*$/)==null){
		document.getElementById(id).value=0;
      	//alert('请输入正确的数字！');
	}		
}

function formatCurrency(num) {    
    num = num.toString().replace(/\$|\,/g,'');    
    if(isNaN(num))    
    num = "0";    
    sign = (num == (num = Math.abs(num)));    
    num = Math.floor(num*100+0.50000000001);    
    cents = num%100;    
    num = Math.floor(num/100).toString();    
    if(cents<10)    
    cents = "0" + cents;    
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)    
    num = num.substring(0,num.length-(4*i+3))+','+    
    num.substring(num.length-(4*i+3));    
    return (((sign)?'':'-') + num + '.' + cents);    
} 