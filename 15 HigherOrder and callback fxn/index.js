const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

const calculator = (a, b, operator) => {
  return operator(a, b);
};
console.log(calculator(5, 7, mul));

// Here, calculator is a Higher Order Fxn and add/sub/mul/div are call back fxn
