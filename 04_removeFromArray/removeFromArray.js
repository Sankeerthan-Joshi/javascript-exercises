const removeFromArray = function(array, ...args) {
    return newArray = array.filter((element)=>{return !args.includes(element)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
