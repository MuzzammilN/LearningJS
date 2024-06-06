/* 
    NodeList = static collection of HTML elements by (id, class, elements)
               can be created by using querySelectorAll()
               similiar to an array, but no (map. filter, reduce)
               NodeList won't udate tp automatically reflect chnages

*/


let buttons = document.querySelectorAll(".myButtons")

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent = "s";
});