function numberOfSteps(num: number): number {
  let result = 0;

  while (num != 0) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    result++;
  }

  return result;
};

export default numberOfSteps;
