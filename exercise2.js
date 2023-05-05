function primeNumberCheck(number) {
  let count = 0;
  if (number < 2) {
    return "Число не простое"
  } else if (number > 1000) {
    return "Данные не верны"
  } else {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0){
        count++
      }
    }

    if (count === 2) {
      return "Число простое";
    } else {
      return "Число не простое";
    }
  }
}

console.log(primeNumberCheck(5));