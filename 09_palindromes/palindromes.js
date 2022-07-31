const palindromes = function (str) {
    let arr = str.toLowerCase().split("");
    arr = arr.filter((element)=>(element>'a'&& element<='z'));
    str = arr.join("");
    for(let i=0; i<=str.length/2; i++){
        if(str[i]!== str[str.length-1-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
