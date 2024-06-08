/* 
    Promise = An object that manages asyncrhonous operations.
              Wrap a Promise object around {Asynchronous Code}
              "I promise to return a value"
              Pending -> Resolved or Rejected
              new Promise((Resolve, Reject)) => {Asynchronous Code})

 DO THESE CHORES IN ORDER


 1. WALK THE DOG
 2. CLEAN THE KITCHEN
 3. TAKE OUT THE TRASH

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
        setTimeout(()=>{
            resovle("You take out the trash");
        }, 500);
    });
}



//USING METHOD CHAINING
walkDog().then(value => {console.log(value); return cleanKitchen()}).
        then(value => {console.log(value); return takeOutTrash()}).
        then(value => {console.log(value); console.log("You finished all the chores")});