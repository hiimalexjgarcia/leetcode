function twoSum(nums: number[], target: number): number[] {
  let result = [];

  for (let a = 0; a < nums.length-1; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] == target) {
        result.push(a);
        result.push(b);
        break;
      }
    }
  }

  return result;
};

export default twoSum;