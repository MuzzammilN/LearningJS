/*

    Error = An object that is created to represent a porblem that occurs 
            occur often with user inpout or establishing a connection

    try{} = Encloses code that might potentially cause an eror
    catch{} = Catch and handle any thrown Errors from try { }
    finally{} = (optional) Always executes. Used mostly for clean up
                 ex. close file, close connections, release resources


*/ 





try { const dividend = window.prompt("Enter a dividend");

    const divisor = window.prompt("Entera a divsor");


    if(divisor == 0) {
        throw new Error("You can't divide by 0 :)");
    } 


    const result = dividend / divisor;

    console.log(result);

} 

catch(error) {
    console.error(error);
}
