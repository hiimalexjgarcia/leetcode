function isPalindrome(x: number): boolean {
  if (x.toString() !== x.toString().split("").reverse().join(""))
    return false;

  return true;
};

export default isPalindrome;
