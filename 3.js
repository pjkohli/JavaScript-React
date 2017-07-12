//You'll have already used (hopefully!) function.prototype.bind() today. Could you 
    //(1) tell me the difference between .bind() and .call()
    //(2) tell me the difference between .call() and .apply()
//You can talk this through with me or write it down, feel free to use code examples if it helps...
//If you take it home, please give examples of real life use cases. 

The bind() method is primarily used to call a function with the this value set explicitly. 
It other words, bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.
	Syntax: 
			theFunction.call().bind(thisArg[,arg1[,arg2[,argN]]])

	Example:
			// Bind is used to specify first and second argument.
			//Anytime bound function is called, arguments are used as third and fourth argument.
			var displayArgs = function (val1, val2, val3, val4) {  
			    document.write(val1 + " " + val2 + " " + val3 + " " + val4);  
			}  

			var emptyObject = {};  

			// Create a new function that uses the "a" and "b" parameters as the first and second parameters.  
			var displayArgs2 = displayArgs.bind(emptyObject, "a", "b");  

			// Call the new function. The "c" and "d" parameters are used as the third and fourth parameters.  
			displayArgs2("c", "d");  
			// Output: a b c d

The call() method calls a function with a given this value and arguments provided individually. 

	Syntax: 
			theFunction.call(valueForThis, arg1, arg2, ...)
		
	Example:
			This method can be used while using chain constructore.

			function Product(name, price) {
			  this.name = name;
			  this.price = price;
			}

			function Food(name, price) {
			  Product.call(this, name, price);
			  this.category = 'food';
			}

			function Toy(name, price) {
			  Product.call(this, name, price);
			  this.category = 'toy';
			}

			var cheese = new Food('feta', 5);
			var fun = new Toy('robot', 40);


The apply() method calls a function with a given this value, and arguments provided as an array or array Object. 
Second argument passed is an array.
This method can be used if we dont know number of arguments. 
	Syntax: 
			theFunction.apply(valueForThis, arrayOfArgs)

	Example:
			This method can help avoid looping over the array values. The shown example is with built-in Math.max function.

			var numbers = [5, 6, 2, 3, 7];
			var max = Math.max.apply(null, numbers); 
			// This is equal to Math.max(numbers[0], numbers[1], ...)
			


(1) .bind() and .call()
	.bind(): The bind() method returns a new function which can be executed at your convenience. 

	.call(): The call() calls the function.
	This method executes the function immediately.




(2) Difference between .call() and .apply()
	.call(): The call() method requires arguments to be listed explicitly.
			The arguments must be known.

	.apply(): Second argument passed is an array.
			 This method can be used if we dont know number of arguments or argumemnts are stored in an array. 




	