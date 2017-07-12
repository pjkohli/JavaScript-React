//This is fixed code for my person class. 

class Person{
    constructor (first, second){
        super(first, second)
        this.name = {first, second}
    }

    sayName(){
        return this.name.first + " " + this.name.second;
    }

    greet(){
        return "Hello" + sayName();
    }
}

const tom = new Person('tom', 'jennings'); 

console.log(tom.greet()); 
