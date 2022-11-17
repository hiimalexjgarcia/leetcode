import guessNumberGenerator from './guess_number_generator'

test('n = 10, pick = 6 => 6', () => {
    var guessNumber = guessNumberGenerator( 6 );
    expect( guessNumber( 10 ) ).toEqual( 6 );
});

test('n = 1, pick = 1 => 1', () => {
    var guessNumber = guessNumberGenerator( 1 );
    expect( guessNumber( 1 ) ).toEqual( 1 );
});

test('n = 2, pick = 1 => 1', () => {
    var guessNumber = guessNumberGenerator( 1 );
    expect( guessNumber( 2 ) ).toEqual( 1 );
});

test('n = 2, pick = 2 => 2', () => {
    var guessNumber = guessNumberGenerator( 2 );
    expect( guessNumber( 2 ) ).toEqual( 2 );
});
