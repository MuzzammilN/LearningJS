/* 
        Synchronous = Executes line by line consecutively in a sequential manner
                    code that waits for an operation to complete
        

        Asynchronous = Allows multiple operations to be performed concurrently without waiting
                        Doesn't block that execution flow that allows the program to continue
                        (I/O operations, network requests, fetching data)
                        Handled with: Callbacks, Promises, Async/Await

*/
function func1(callback){
    setTimeout(() => {console.log("Task 0"); callback()}, 3000);
}

function func2(){
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");

}


func1(func2);




