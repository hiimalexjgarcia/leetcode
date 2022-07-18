import romanToInt from './romanToInt';

test('III => 3', () => {
  expect( romanToInt('III') ).toBe(3);
})

test('1 <= s.length <= 15', () => {
  expect( () => romanToInt('') ).toThrow('Roman numeral must be between 1 and 15 symbols long.');
  expect( () => romanToInt('MMMMMMMMMMMMMMMM') ).toThrow('Roman numeral must be between 1 and 15 symbols long.');
})

test('s contains only the characters I, V, X, L, C, D, and M', () => {
  expect( () => romanToInt('xL') ).toThrow('Roman numeral must contain only the symbols I, V, X, L, C, D, and M.');
})

test('LVIII => 58', () => {
  expect( romanToInt('LVIII') ).toBe(58);
});

test('MCMXCIV => 1994', () => {
  expect( romanToInt('MCMXCIV') ).toBe(1994);
});

test('MMCDXXII => 2422', () => {
  expect( romanToInt('MMCDXXII') ).toBe(2422);
});

test('MMMCMXCIX => 3999', () => {
  expect( romanToInt('MMMCMXCIX') ).toBe(3999);
});

test('I => 1', () => {
  expect( romanToInt('I') ).toBe(1);
});
