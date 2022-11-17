import guessNumber from './guess_number'

test('n = 10, pick = 6 => 6', () => {
    var guess = function(num: number): number {
	if ( num > 6 ) {
	    return -1
	} else if ( num < 6 ) {
	    return 1
	}

	return 0;
    }
    
    expect( guessNumber(10) ).toEqual( 6 );
});

