/*   
    nested objects = Objects inside of other Objects.
                     Allows you to represent more complex data structures
                     Child Object is enclosed by a Parent Object

                     Person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/


const person = {

    fullName: "Spongebob",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "Jellyfishing", "Cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }

}



console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.street);

// -----------For Loop Method--------

for (const property in person.address){
    console.log(person.address[property]);

}

// ----------Something more complicated ------


class Person {

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address {

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;


    }
}

const person1 = new Person("Sponge", 13, "124 conch", "Bikini Bottom", "Int. Waters");

console.log(person1.address.country);