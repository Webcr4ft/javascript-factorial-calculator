const num = 5;

function factorialCalculator(number) {
  let result = 1;

  for (let i = number; i > 1; i--) {
    result *= i;
  }

  return result;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
