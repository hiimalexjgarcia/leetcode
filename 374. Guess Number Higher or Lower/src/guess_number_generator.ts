/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	         -1 if num is higher than the picked number
 *			  1 if num is lower than the picked number
 *                        otherwise return 0
 * var guess = function(num) {}
 */

function guessNumberGenerator(pick: number): Function {
    return function(n: number): number {
	var guess = function(num: number): number {
	    if ( num > pick ) {
		return -1
	    } else if ( num < pick ) {
		return 1
	    }

	    return 0
	}

	let i
	while ( i = guess(n) )
	    n = n + i

	return n
    }
}

export default guessNumberGenerator;
