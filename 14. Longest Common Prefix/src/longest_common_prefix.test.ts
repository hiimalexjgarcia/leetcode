import longestCommonPrefix from './longest_common_prefix';

test(' strs = ["flower","flow","flight"] => "fl" ', () => {
  expect( longestCommonPrefix( ["flower","flow","flight"] ) ).toBe("fl");
})