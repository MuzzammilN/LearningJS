/* 
    eventListner = Listen for specific events to create interactive web pages
                events: keydown, keyup, 
                document.addEventListener(event, callback);

*/

const myBox = document.getElementById("mybox");
const moveamount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= 10;
                break;
                case "ArrowDown":
                    y += 10;
                    break;
                    case "ArrowLeft":
                        x -= 10;
                        break;
                        case "ArrowRight":
                            x += 10;
                            break;
        }


        myBox.style.top = `${y}px`;
        myBox.style.down = `${y}px`;
        myBox.style.right = `${x}px`;
        myBox.style.left= `${x}px`;
    }
});