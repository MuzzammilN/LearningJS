/* 


Async/Await = Async = makes a funciton return a promise
              Await = makes an async function wait for a promise


              Allows you write asynchronous code in synchronous manner
              Async doesn't have resolve or reject parameters
              Everything after Await is placed in an event queue

*/

walkDog = ()=> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked) {
                resolve("You walked the dog"); 
            }
            else {
                reject("You didn't walked the dog");
            }

        }, 1500);
    
    });
}

cleanKitchen = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen Brooo");
        }, 2500);
    });
}


takeOutTrash = () => {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("You take out the trash");
        }, 500);
    });
}



//USING METHOD CHAINING
async function doChores(){
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores ");
}

doChores();