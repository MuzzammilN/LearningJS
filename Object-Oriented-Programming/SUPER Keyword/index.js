/*   
    Super = keyword is used in classes to call the constructor or 
            access the properties and methods of a parent (superclass)
            this = this object
            super = the parent
*/



class Animal {
    constructor(){

    }
}

class Rabbit extends Animal {
    
    constructor(name, age){
        super();
        this.name = name;
        this.age = agae;
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal {

    constructor(name, age){
        super();
        this.name = name;
        this.age = agae;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {

    constructor(name, age){
        super();
        this.name = name;
        this.age = agae;
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("")