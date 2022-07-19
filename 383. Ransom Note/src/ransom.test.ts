import canConstruct from './ransom'

test('ransomNote = "a", magazine = "b" => false', () => {
  expect( canConstruct('a', 'b') ).toBe( false );
});
