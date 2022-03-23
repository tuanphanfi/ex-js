//--------call back function
function myFunc(callBackFunction) {
    // console.log(callBackFunction)
    callBackFunction()
}

function callBackFunction() {
    console.log("Call back function is on process")
}

myFunc(callBackFunction)

//---------
function callback1(doHome) {
    doHome()
}

function callback2(goToSchool) {
    goToSchool()
}

function callback2(getHomework) {
    getHomework()
}


function callbackHell() {
    callback1(
        goToSchool(
            getHomework(
                doHome(
                    goToSchool(
                        getHomework(

                        )
                    )
                )
            )
        )
    )
}