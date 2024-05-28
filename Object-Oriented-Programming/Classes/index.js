/*
    Class = (ES6 feature) provides a more structured and cleaner way to 
    work with objects compared to traditional consturctor functions
    ex. static keyword, encapsulation, inheritance.

    What is static Keyword? "constructor() function"
    What is Encapsulation?


*/

class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }


    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);

    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }


}


const salesTax = 0.13;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);

console.log(`Total Price (with tax): ${total}`);