const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should raise error if args not numbers', function(){
		const badInputs = [
			"stringShouldThrowError",
			false
		];

		badInputs.forEach(function(input){
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});

	it('should print the appropriate case', function(){
		const normalCases = [
		{num: 30, expected: 'fizz-buzz' },
		{num: 20, expected: 'buzz' },
		{num: 9, expected: 'fizz' },
		{num: 8, expected: 8 }
		];

		normalCases.forEach(function(input){
			const response = fizzBuzzer(input.num);
			response.should.equal(input.expected);
		});
	});		
});


