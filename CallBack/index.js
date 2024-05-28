// Callback = a function that is passed as an argument 
//                  to another function


hello(goodbye);


function hello(callback){
    console.log("hello")
    callback();
}


function leave(){
    console.log("Leave!")
}




function goodbye(){
    console.log("goodbye!")
}