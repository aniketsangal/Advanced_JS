const promise1 = new Promise((resolve, reject) => {
    let success =true
    if(success){
        resolve({
            id: 2930309,
            username: "John Doe"
        })
    }
    else{
        reject(new Error("User not found"))
    }
})

promise1
.then(Response => {
    console.log(Response)
})
.catch(error => {
    console.log(error)
})

const promise2 = new Promise((resolve, reject) => {
    let success = true
    if(success){
        resolve({
            id: 76347497648,
            username: "Zohn Doe"
        })
    }
    else{
        reject(new Error("User not found"))
    }
})

promise2.then(response => console.log(response)).catch(error => console.log(error.message))

Promise.all([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });

    Promise.race([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });

    Promise.allSettled([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });


Promise.any([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });