const ftoc = function (f) {
  let c = (f - 32) * 5 / 9;
  let i = 100000000;
  let round;
  c=c*i;
  for(let i=0;i<8;i++) {
    c = Math.round(c);
    c=c/10
  }
  return c;
};

const ctof = function (c) {
  let f = (c*9/5)+32;
  let i = 100000000;
  f = f*i;
  for(let i=0;i<8;i++){
    f = Math.round(f);
    f = f/10;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
