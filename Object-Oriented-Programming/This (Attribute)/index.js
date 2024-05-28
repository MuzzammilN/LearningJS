/// this = reference to the object where 'THIS' is used
//         (The object depends on the immediate context)     
//          person.name = this.name
//                          


const person1 = {
    name: "spongebob",
    favFood: "hamburgers",
    sayHello: function()  {
        console.log(`Hi I am ${this.name}`)
    }
}


person1.sayHello();
