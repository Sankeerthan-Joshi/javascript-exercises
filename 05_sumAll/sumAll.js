const sumAll = function(num1, num2) {
    if((typeof(num1)!="number" || typeof(num1)!==typeof(num2) || Math.min(num1,num2)<0)){
        return 'ERROR'
    }
    let sum =0;
    for(let i = Math.max(num1,num2); i>= Math.min(num1,num2); i--){
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
