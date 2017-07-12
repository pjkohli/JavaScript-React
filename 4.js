

//FizzBuzz problem: This program prints the numbers from 1 to 100. 
//But for multiples of three it prints “Fizz” instead of the number and for the multiples of five it prints “Buzz”. 
//For numbers which are multiples of both three and five “FizzBuzz” is printed.
// This number can be changed and used to display any range(not always 100) by passing an argument to the funtion.
function FizzBuzz(){
	for (var i=1; i <= 100; i++)
	{
	    if (i % 15 == 0)
	        console.log("FizzBuzz");
	    else if (i % 3 == 0)
	        console.log("Fizz");
	    else if (i % 5 == 0)
	        console.log("Buzz");
	    else
	        console.log(i);
	}
}
