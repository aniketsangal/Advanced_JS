const promise = new Promise((resolve, reject) => {
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

promise
.then(Response => {
    console.log(Response)
})
.catch(error => {
    console.log(error)
})
