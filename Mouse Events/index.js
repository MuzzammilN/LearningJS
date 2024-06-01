/* 
    eventListener = Listen for specific events to create interactive web pages
                    events: click, mouseover, mouseout
                    .addEventListener(event, callback);


*/



const myBox = document.getElementById("mybox");
const myButton = document.getElementById("myButton")


myBox.addEventListener("click", event => {

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
}
);

myButton.addEventListener("mouseover", event => {

    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😟";
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃"
})