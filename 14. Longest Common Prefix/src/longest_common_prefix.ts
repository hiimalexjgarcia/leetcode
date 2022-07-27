function longestCommonPrefix(strs: string[]): string {
  let result = "";

  if (strs.length == 1) return strs[0];

  const maxLength = Math.min( ...strs.map( (s: string) => s.length ) );
  if (maxLength == 0) return "";

  for (let i = 0; i < maxLength ; i++) {
    const matches = strs.map( (s) => s[i] );
    if ( matches.every( (c) => c == matches[0] )) {
      result = result + matches[0].toString();
    } else
      break;
  }

  return result;
};

export default longestCommonPrefix;