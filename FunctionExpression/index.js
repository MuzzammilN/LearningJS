// function declaration = define a reusable block of code
//                          that performs a specific task


const numbers = [1,2,3,4,5,6];


const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})

const cubes = numbers.map(
    function cube(element) {
        return Math.pow(element, 3);
    })

console.log(cubes);

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNums);

// function expressions = a way to define functions as 
//                        values or variables


//1. Callbacks in asynchronous operations
//2. Higher-Order Functions
//3. Closures
//4. Event Listeners

const hello = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("Hello")
}, 5000);
