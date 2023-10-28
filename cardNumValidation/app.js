function checkCardNum(cardNumber){

    if(!cardNumber || !/^\d+$/.test(cardNumber)){
        return false;
    }

    let sum = 0;
    let isHandledIndex = false;

    for(let i = cardNumber.length - 1; i>=0; i--){
        let digit = parseInt(cardNumber[i], 10);
         
        if(isHandledIndex){
            digit *= 2;

            if(digit>9){
                digit -= 9;
            }
        }

        sum += digit;
        isHandledIndex = !isHandledIndex;
    }

    return sum % 10 === 0;
}

module.exports = checkCardNum;