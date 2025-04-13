const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(nums) {
	return nums.reduce((total, num) => total += num, 0)
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total *= num, 1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let nums = []
  while (a > 1) {
    nums.push(a)
    a -= 1
  }
  return nums.reduce((total, num) => total *= num, 1)
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
