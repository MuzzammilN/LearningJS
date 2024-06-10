/* 
    JSON = (JavaScript Object Notation) data-interchange format
            Used for exchanging data between a server and a web
            application JSON files {key:value} or [value1, value2, value3]


            JSON.stringify() = converts a JS Object to a JSON string.
            JSON.parse() = converts JSON string to a JS object



*/

fetch("poeple.json")
    .then(response => response.json()).then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));
