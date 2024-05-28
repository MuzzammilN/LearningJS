// Arrow functions = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code


const hello = () => {

    console.log("Hello")
}

hello();


// vs Regular Function Expressions

const hellos = function(){
    console.log("Hello World");
}

hellos();


const hello2 = (name) => console.log(`hello ${name}`)

hello2("Muzzammil");


// For example the call back function we did


setTimeout( () => console.log("Hello CallBack"), 3000);