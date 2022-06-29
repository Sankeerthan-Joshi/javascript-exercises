const repeatString = function(word, repeatValue) {
    if(repeatValue<0){
        return 'ERROR'
    }
    if(repeatValue===0){
        return "";
    }
    return word= word + repeatString(word,repeatValue-1);
};

// Do not edit below this line
module.exports = repeatString;
