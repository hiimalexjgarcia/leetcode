import isPalindrome from './is_palindrome'

test('x = 121 => true', () => {
  expect( isPalindrome(121) ).toEqual(true);
});

test('x = -121 => false', () => {
  expect( isPalindrome(-121) ).toEqual(false);
});

test('x = 10 => false', () => {
  expect( isPalindrome(10) ).toEqual(false);
});