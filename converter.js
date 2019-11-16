module.exports={
convertToBinary: function(n) {
  let arr = [];
    while (n>=1) {
        if (n % 2===0) {
            arr.unshift(0);
        } else if(n%2 !=0) {
            arr.unshift(1);
            
        }
     n =Math.floor(n/ 2);
    }
return arr.join("");
},

convertToHexa:function(n){
    let arr = [];
    while(n>=1){
        if (n%16<=9 && n%16>=1){
            arr.unshift(n%16)
        }else if (n%16 ==10){
            arr.unshift("A")
        }else if (n%16 ==11){
            arr.unshift("B")
        }else if (n%16 ==12){
            arr.unshift("C")
        } else if (n%16 ==13){
            arr.unshift("D")
        }else if (n%16 ==14){
            arr.unshift("E")
        }else if (n%16 ==15){
            arr.unshift("F")
        }
        n=Math.floor(n/16);
        }
        return arr.join("");
        }
    }

    
       
