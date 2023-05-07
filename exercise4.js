function countingNumbers(a, b){
  let first = a;

  let timerId = setInterval(() => {
    if (first <= b) {
      console.log(first);
      first++
    } else {
      clearInterval(timerId);
    }

  }, 1000)
}

countingNumbers(5, 15);