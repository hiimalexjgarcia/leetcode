import twoSum from './two_sum';

test(' nums = [2,7,11,15], target = 9 => [0, 1] ', () => {

  expect( twoSum( [2,7,11,15], 9 ) ).toEqual( expect.arrayContaining( [0, 1] ) );
})
