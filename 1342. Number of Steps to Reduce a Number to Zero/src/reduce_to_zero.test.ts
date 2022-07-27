import numberOfSteps from './reduce_to_zero';

test('num = 14 => 6', () => {

  expect( numberOfSteps( 14 ) ).toBe( 6 );
})

test('num = 8 => 4', () => {

  expect( numberOfSteps( 8 ) ).toBe( 4 );
})

test('num = 123 => 12', () => {

  expect( numberOfSteps( 123 ) ).toBe( 12 );
})
