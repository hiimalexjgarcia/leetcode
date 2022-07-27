import longestCommonPrefix from './longest_common_prefix';

test(' strs = ["flower","flow","flight"] => "fl" ', () => {
  expect( longestCommonPrefix( ["flower","flow","flight"] ) ).toBe("fl");
})

test(' strs = ["dog","racecar","car"] => "" ', () => {
  expect( longestCommonPrefix( ["dog","racecar","car"] ) ).toBe("");
})