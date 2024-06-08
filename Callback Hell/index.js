/*
    Callback Hell = Situation in Javascript where callbacks are nested
                    within other callbacks to the degree where the is
                    difficult to read. Old pattern to handle asynchronous 
                    functions. Use promises + async/await to avoid 
                    Callback Hell


*/


task1 = (callback) => {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
    
}


task2 = (callback) => {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}


task3 = (callback) => {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}


task4 = (callback) => {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All task complete");
            });
        })
    });
})


console.log("All tasks complete");