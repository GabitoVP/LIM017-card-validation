const validator = {
  isValid: function (creditCardNumber){//87654
    let array =Array.from(creditCardNumber);//Método 
    let array2=[];
    let sumNum=0;
    for(let i=0;i<array.length;i++){
      array2.push(parseInt(array[i]));
    }                        //0 1 2 3 4
    array2.reverse(); //array2[4,5,6,7,8]
    for (let i=0; i<array2.length; i++){ //0<5 si
      if((i+1)%2==0){ //0+1=1%2==0 no, 1+1=2%2==0 si, 2+1=3%2==0 no, 3+1=4%2==0 si, 4+1=5%2==0 no
        array2[i]*=2;//array2=5*2=10, array2=7*2=14
        if(array2[i]>=10){
          array2[i]-=9;//array2=10-9=1, array2=14-9=5
        }
      sumNum+=array2[i];//sumNum=4+1=5, sumNum=11+5=16
      }
      else{
      sumNum+=array2[i];//sumNum=0+4=4, sumNum=5+6=11, sumNum=16+8=24
      } 
    }
  if(sumNum%10==0 && sumNum!=0){//sumNum=24%10==0 no(false)
    return true;
  }
  else{
    return false;
  }

},                                    
  maskify: function(creditCardNumber){//45678
    let hideNum = [];     //5
    for(let i = 0; i < creditCardNumber.length; i++){//0<5 
      if(i < creditCardNumber.length-4){//0<5-4 -> 0<1  ,1<1 no
        hideNum.push("#");//["#"]
      }else{
        hideNum.push(creditCardNumber[i]);//["#","5","6","7","8"]
        }
    }
    return hideNum.join("");//#5678
  
  },
  getIssuer: function(creditCardNumber){
    let array =Array.from(creditCardNumber);
    let message="Número de dígitos inválidos";
    if(array[0]==4){
      if (creditCardNumber.match(/^4[0-9]{12}([0-9]{3})?$/)){
        message= "Visa";
      }
    }
    else if(array[0]==5){
      if (creditCardNumber.match(/^5[1-5][0-9]{14}$/)){
        message= "Mastercard";
      }
    }
    else if(array[0]==3){
      if(creditCardNumber.match(/^3[47][0-9]{13}$/)){
        message= "American Express"
      }
    }
    return message;
  }
};
validator.isValid(56)
export default validator;
