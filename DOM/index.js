/* 

    DOM = Document Object Model
        Object{} that represents the page you see in the browser and provides you with an API to interact wuth it.
        Web browsers constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation
        Javascript can access the DOM to dynamically change the content, structure and style of a web page


*/


console.log(document);
document.title = "My website"

document.body.style.backgroundColor = "hsl(0,0%, 15%)";
console.dir(document);