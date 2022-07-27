import maximumWealth from './maximum_wealth';

test('accounts = [[1,2,3], [3,2,1]] => 6', () => {

  expect( maximumWealth( [[1,2,3], [3,2,1]] ) ).toBe( 6 );
})

test('accounts = [[1,5],[7,3],[3,5]] => 10', () => {

  expect( maximumWealth( [[1,5],[7,3],[3,5]] ) ).toBe( 10 );
})

test('accounts = [[2,8,7],[7,1,3],[1,9,5]] => 17', () => {

  expect( maximumWealth( [[2,8,7],[7,1,3],[1,9,5]] ) ).toBe( 17 );
})
