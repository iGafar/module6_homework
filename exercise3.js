function twoSum(num) {
  
  return function(number) {
    return num + number
  }
};

const result = twoSum(5);

console.log(result(3));