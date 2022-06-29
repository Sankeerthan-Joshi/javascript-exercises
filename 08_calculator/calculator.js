const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array) {
  if(array.length===0){
    return 0;
  }
	return array.reduce((prevNum,currNum)=>(prevNum+currNum));
};

const multiply = function(array) {
  if(array.length===0){
    return 0;
  }
  return array.reduce((prevNum,currNum)=>(prevNum*currNum));
};

const power = function(num, power) {
  let res = 1;
	for(let i=0;i<power;i++){
    res = res*num;
  }
  return res;
};

const factorial = function(num) {
	if(num<=1){
    return 1;
  }

  return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
