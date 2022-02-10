import validator from './validator.js';

let button=document.getElementById("btn");
let card=document.getElementById("number");
//let card2=document.getElementById("number");
let validMessage=document.getElementById("Message");
button.addEventListener("click",clickButton);
//document.getElementById("number").addEventListener("input", maxLengthCheck);
document.getElementById("number").addEventListener("keypress", isNumeric);
//function maxLengthCheck(object) {
  //if (object.value.length > object.max.length)
    //object.value = object.value.slice(0, object.max.length);
//}

function isNumeric (evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode (key);
  let regex = /[0-9]|\./;
  if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function clickButton(){
  card=document.getElementById("number").value;
  if (card.length < 10 || card.length > 16){
    alert("El número de tarjeta tiene que ser entre 10 y 16 dígitos");
  }else{
    //card2=document.getElementById("number").value;
    //card2=validator.maskify(card2);
    //document.getElementById("number2").value=card2;
    if (validator.isValid(card)==true){
      //card2=document.getElementById("number").value;
      card=validator.maskify(card);
      document.getElementById("number2").value=card;
      validMessage.innerHTML="Tarjeta válida";
    }
    else{
      validMessage.innerHTML="Tarjeta válida";
    }
  
  }
}





