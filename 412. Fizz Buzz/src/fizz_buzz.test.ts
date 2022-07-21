import fizzBuzz from './fizz_buzz'

test('n = 3, ["1","2","Fizz"]', () => {
  expect( fizzBuzz(3) ).toEqual( expect.arrayContaining(["1","2","Fizz"]) );
});
