/* 
    setTimeout() = function in JavaScript that allows you to schedule
                   the execution of a function after an amount of time (milliseconds)
                   times are approximate (varies based on the workload of the JavaScript runtime enb.)


                   setTimeout(callback, delay)


*/


function sayHello() {
    window.alert("Hello");
}


setTimeout(sayHello, 3000);