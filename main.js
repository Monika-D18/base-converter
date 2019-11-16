const converter=require("./converter.js");
const reader=require('readline-sync');
let n=reader.questionInt("Please insert your number to be converted-");
console.log(converter.convertToBinary(n))
console.log(converter.convertToHexa(n));