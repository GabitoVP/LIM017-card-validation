import validator from './validator.js';

let button=document.getElementById("btn");
let validCreditCardDigit=document.getElementById("validateCreditCardDigit");
let validMessage=document.getElementById("Message");
let cardType=document.getElementById("Message2");
button.addEventListener("click",clickButton);

function clickButton(){
  let card=document.getElementById("number").value;
  let card2;
  if (card.length > 0){
    if (card.length > 9 && card.length <= 16){
      validCreditCardDigit.innerHTML="";
      if (validator.isValid(card)==true){
        validMessage.innerHTML="Tarjeta válida";
        validMessage.style.color="blue";
        card2=validator.maskify(card);
        document.getElementById("number2").value=card2;
      }
      else{
        validMessage.innerHTML="Tarjeta inválida";
        validMessage.style.color="red";
        card2=document.getElementById("number2").value="";
      }

      if(validator.getIssuer(card)=="Visa"){
        cardType.innerHTML=validator.getIssuer(card);
      }else if(validator.getIssuer(card)=="Mastercard"){
        cardType.innerHTML=validator.getIssuer(card);
      }else if(validator.getIssuer(card)=="American Express"){
        cardType.innerHTML=validator.getIssuer(card);
      }else{
        cardType.innerHTML=validator.getIssuer(card);
        cardType.style.color="red";
      }
    }
    else{
      validCreditCardDigit.innerHTML="Ingresar dígitos entre 10 y 16";
    }
  }
  else{
    validCreditCardDigit.innerHTML="Ingresar solo dígitos";
  }
}


