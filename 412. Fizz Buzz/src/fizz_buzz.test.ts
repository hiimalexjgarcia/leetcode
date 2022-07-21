import fizzBuzz from './fizz_buzz'

test('n = 3, ["1","2","Fizz"]', () => {
  expect( fizzBuzz(3) ).toEqual( expect.arrayContaining(["1","2","Fizz"]) );
});

test('n = 5, ["1","2","Fizz","4","Buzz"]', () => {
  expect( fizzBuzz(5) ).toEqual( expect.arrayContaining(["1","2","Fizz","4","Buzz"]) );
});

test('n = 15, ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', () => {
  expect( fizzBuzz(15) ).toEqual( expect.arrayContaining(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]) );
});
