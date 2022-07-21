function fizzBuzz(n: number): string[] {
  let result = [];
  let i = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result[i] = "FizzBuzz";
    } else if (i % 3 === 0) {
      result[i] = "Fizz";
    } else if (i % 5 === 0) {
      result[i] = "Buzz";
    } else {
      result[i] = i.toString();
    }
  }

  result.shift();
  return result;
};

export default fizzBuzz;
