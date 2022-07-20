import canConstruct from './ransom'

test('ransomNote = "a", magazine = "b" => false', () => {
  expect( canConstruct('a', 'b') ).toBe( false );
});

test('ransomNote = "aa", magazine = "ab" => false', () => {
  expect( canConstruct('aa', 'ab') ).toBe( false );
});

test('ransomNote = "aa", magazine = "aab" => true', () => {
  expect( canConstruct('aa', 'aab') ).toBe( true );
});
