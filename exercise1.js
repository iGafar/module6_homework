function parityCheck() {
  let array = [1, 4, 234, 532, 124, 12, 22, 3, 5];

  let countEven = 0;
  let countOdd = 0;
  let countZero = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) !== "number"){
      continue;
    } else if (array[i] % 2) {
      countOdd += 1;
    } else if (array[i] % 2 == 0) {
      countEven += 1;
    } else if (array[i] == 0) {
      countZero += 1;
    } else {
      continue
    }
  }

  console.log(`Четных: ${countEven}`, `Нечетных: ${countOdd}`, `Нулей: ${countZero}`);
}

parityCheck();