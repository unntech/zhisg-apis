// JavaScript Document
var xmlHttp


function AjaxHint(str,url,showid){
  //API Example
  //AjaxHint(document.getElementById('getdata').value,'/api/sms.php','showid','{$yzcode}')
  
  var param = arguments[3] ? arguments[3] : ""; 
  url=url+"?q="+str
  if (param != ""){ url = url + "&p=" + param }
  url=url+"&sid="+Math.random()
  ShowAjax(url,showid)
}

function ShowAjax(url,showid){
  window.showdivid = showid

  //获取xmlHttpObject对象，如果为空，提示浏览器不支持ajax
  xmlHttp=GetXmlHttpObject()
  if (xmlHttp==null){
     alert ("Browser does not support HTTP Request")
     return
  } 

  //回调函数，执行动作
  xmlHttp.onreadystatechange=stateChanged

  //open
  xmlHttp.open("GET",url,true)
  xmlHttp.send(null)
}

function stateChanged(){ 
  if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){ 
     //将获取的信息插入到txtHint中
	 var showid=window.showdivid;
     document.getElementById(showid).innerHTML=xmlHttp.responseText 
  } 

}

//获取xml对象
function GetXmlHttpObject(){
var xmlHttp=null;
try{
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
}

catch (e){
  // Internet Explorer
  try{
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }

  catch (e){
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

}

return xmlHttp;

}