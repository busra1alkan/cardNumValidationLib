const checkCardNum = require('./app');

const validCardNumber = '4766190864828150';
const invalidCardNumber = '4532015112830367';

console.log('Geçerli Kart Numarası:', checkCardNum(validCardNumber)); // true
console.log('Geçersiz Kart Numarası:', checkCardNum(invalidCardNumber)); // false