const add = function(...numbers) {
	let total = 0;
  for (var number of numbers){
    total += number;
  }
  return total;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let total = 0;
	for (let number of array){
    total += number;
  }
  return total;
};

const multiply = function(numbers) {
	let total = 1;
  for (var number of numbers){
    total *= number;
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let total = 1;
  if (num == 0 || num == 1){
    return 1;
  }
  else {
    for (let i = 1; i <= num; i++){
      total *= i;
    }
  }
  return total;
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
