/*   
    destructuringing = extract values from arrays and object,
                    then assign them to variables in a conveniant way
                    [] = to perform array destructuring
                    {} = to perform object destructuring
                    5 examples
*/



// --------- Example 1 -------------

let a = 1;
let b = 2;

[a, b] = [b, a]



console.log(a, b);



// -------- Example 2 ---------

const colors = ["red", "green", "blue", "black","white"];

[colors[0], colors[4]] = [colors[4], [0]]


console.log(colors);

// -------------Example 3------
const color = ["red", "green", "blue", "black","white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = color;

console.log(firstColor);
console.log(extraColors);

// ---------Example 4-----------

const person1 = {
    firstname: "Spongebob",
    lastname: "SquarePants",
    age: 30,
    job: "Fry Cook",

}


const person2 = {
    firstname: "Patrick",
    lastname: "star",
    age: 30,
    job: "Fry Cook"
}

const {firstname, lastname, age, job} = person1;

console.log(firstname);

