/*      

    Example  1 <H1>

    Step 1 create the element?
    

    Step 2 add attributes/properties

    step 3 append element to DOM

    remove html elements




*/

const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza"

newH1.id = "myH1";

newH1.style.color = "tomato"

newH1.style.textAlign = "center";


document.getElementById("box1").append(newH1);

//document.body.append(newH1);

//document.body.prepend(newH1);
