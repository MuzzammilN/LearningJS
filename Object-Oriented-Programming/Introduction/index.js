/// Object  = A collection of related properties and/or methods
//            can represent real world objects (people, products, places)
//            object = {key: value,
//                           Function}


const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log("Hello World")
    },
    sayBye: function(){
        console.log("Bye lad");
    }
};


person1.sayHello();