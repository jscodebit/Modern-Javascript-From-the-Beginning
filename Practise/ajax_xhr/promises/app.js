let partyPromise = false;
function makePromise(partyPromise){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(partyPromise){
                resolve("The party promise is successfully scheduled");
            } else {
                reject("Something went wrong")
            }
        });
    });
}

let result = makePromise(partyPromise);

result.then((success)=>console.log(success))
.catch((error)=>{console.log(error)});