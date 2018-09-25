function ouvrirPopup (page,nom,option){
	window.open ("popup.html","pop1","width=500,height=500,left=500,top=200");
}

window.setTimeout("ouvrirPopup()",10000);




 


function psychedelique (){
 var psyke = document.querySelectorAll("p,aside");
if( psyke.length > 0 ){
  for(var h = 0; h < psyke.length; h++){
    psyke[h].style['color'] = 'mediumslateblue'; 
    psyke [h].style.fontFamily = 'papyrus';
  }
}else{
   
}
  var titre = document.querySelectorAll("h1, h2, h3");
  if( titre.length > 0 ){
  for(var h = 0; h < titre.length; h++){
    titre[h].style['color'] = 'green'
	titre[h].style.fontFamily = 'comicsans';
}
}
else{

}

}



