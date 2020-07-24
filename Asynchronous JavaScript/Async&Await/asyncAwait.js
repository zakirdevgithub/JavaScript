

async function asyncAwait(){   //it will return a promise

        console.log("This is me.And I am Zakir Hossain");
        let response= await fetch("sampleJSON.json");
        return response;

}

console.log("Before calling Function");
let gettingValue=asyncAwait();
console.log("After Calling Function");
console.log(gettingValue);
gettingValue.then(response =>{
    return response.json();
}).then((data) =>{
    console.log(data);
})
