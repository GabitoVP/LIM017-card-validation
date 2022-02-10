const validator = {
  isValid: function (creditCardNumber){
    let array =Array.from(creditCardNumber);
    let array2=[];
    let sumNum=0;
    for(let i=0;i<array.length;i++){
      array2.push(parseInt(array[i]));
    }
    array2.reverse();
    for (let i=0; i<array2.length; i++){
      if((i+1)%2==0){
        array2[i]*=2;
        if(array2[i]>=10){
          array2[i]-=9;
        }
      sumNum+=array2[i];
      }
      else{
      sumNum+=array2[i];
      } 
    }
  if(sumNum%10==0 && sumNum!=0){
    return true;
  }
  else{
    return false;
  }

},
  maskify: function(creditCardNumber){
    let hideNum = [];
    for(let i = 0; i < creditCardNumber.length; i++){
      if(i < creditCardNumber.length-4){
        hideNum.push("#");
      }else{
        hideNum.push(creditCardNumber[i]);
        }
    }
    return hideNum.join("");
  
  }

  
};
validator.isValid(56)
export default validator;
