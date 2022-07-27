import twoSum from './two_sum';

test(' nums = [2,7,11,15], target = 9 => [0, 1] ', () => {

  expect( twoSum( [2,7,11,15], 9 ) ).toEqual( expect.arrayContaining( [0, 1] ) );
})

test(' nums = [3,2,4], target = 6 => [1, 2] ', () => {

  expect( twoSum( [3,2,4], 6 ) ).toEqual( expect.arrayContaining( [1, 2] ) );
})
