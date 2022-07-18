export default function romanToInt(s: string): number {
  if (s.length < 1 || s.length > 15)
    throw new Error('Roman numeral must be between 1 and 15 symbols long.');

  interface NumberDictionary {
    readonly [index: string]: number;
  }

  const SymbolValues: NumberDictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;
  let previousSymbolValue = Number.MAX_SAFE_INTEGER;

  [...s].forEach((c) => {
    if ( ! Object.keys(SymbolValues).includes(c) )
      throw new Error('Roman numeral must contain only the symbols I, V, X, L, C, D, and M.');

    if (SymbolValues[c] > previousSymbolValue) {
      result += SymbolValues[c] - 2 * previousSymbolValue
    } else {
      result += SymbolValues[c]
    }

    previousSymbolValue = SymbolValues[c];
  });

  return result;
}
