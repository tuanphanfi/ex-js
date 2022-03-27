// 

// process asynchornous event

// solution for avoiding callback hell

// statuses of Promises

// full

const promise = new Promise((resolve, reject) => {
    // do something
    let a = 1;
    let b = 1;
    if (a === b) {
        resolve() //success
    } else {
        reject() //failed
    }
})

// then will be called when promsie is success or failed
promise
    .then(function () {
        console.log('success')
    })
    .finally(function () {
        console.log("Hello")
    })
    .catch(function () {
        console.log("Failed")
    })

// Promise All

const nauComPromise = nauCom();
const nauCanhPromise = nauCanh();
const nauThitromise = nauThit();

const anToi = Promise.all([nauComPromise, nauCanhPromise, nauThitromise]).then(
    function (com, canh, thit) {
        console.log("Com xong", com)
        console.log("Canh xong", canh)
        console.log("Thit xong", thit)
    }
)
