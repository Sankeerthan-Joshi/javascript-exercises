const reverseString = function(str) {
    let array = str.split('');
    str = '';
    for(let i in array){
        str += array[array.length -1-i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
