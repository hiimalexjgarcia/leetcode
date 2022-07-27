import maximumWealth from './maximum_wealth';

test('accounts = [[1,2,3], [3,2,1]] => 6', () => {

  expect( maximumWealth( [[1,2,3], [3,2,1]] ) ).toBe( 6 );
})
