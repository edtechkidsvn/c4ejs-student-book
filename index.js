let myPromise = new Promise(function(resolve, reject){
    reject();
})

myPromise
    .then(
        function(success) {
            console.log("Success");
            // code when Promise resolve
        }, 

        function(error) {
            console.log("Error")
        // code when Promise reject

        }
    )
    .catch(function(error) {
        console.log("Catch Error")
        // code when Promise reject, but doesn't work!
    })