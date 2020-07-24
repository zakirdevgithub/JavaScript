
//Very Basic
let myVar= new Promise((resolve,reject)=>{
    
    let myPromise=true;
    if(myPromise){
        resolve();
    }
    else{
        reject();
    }
});
myVar.then(()=>{console.log("Problem Resolved")})
    .catch(error=>{console.log("Error Found") });

//With Function
function myFunc(){
    return new Promise ((resolve,reject)=>{
        let myPromise=true;
        if(!myPromise){
            resolve();
        }
        else{
            reject();
        }
    })
}
let myAnotherVar=myFunc().then(()=>{console.log("Problem Solved Man")})
                        .then(()=>{console.log("I can use many then")})
                        .then(()=>{console.log("I can use toooooooo many then")})
                        .catch((er)=>{console.log("This is a Error")});

console.log(myAnotherVar); //This will return another Promise


//with call back function
function myAnotherFunc(callback){
        return new Promise ((resolve,reject)=>{
        let myPromise=true;
        if(myPromise){
        
            resolve();
        }
        else{
            reject();
        }
    })
}

function add(){
    console.log("My name is Zakir Hossain");
}
let myA=myAnotherFunc().then(add())
                        .then(()=>{console.log("Problem Solved Dear")})
                        .catch((er)=>{console.log("This is a Error")});



// JSON Practice
let myJSON={
        "name":"Zakir",
        "age":25,
        "skills":["Java","C/C++","C#","Python","JavaScript"],
        "isMarried":true
}

console.log(myJSON);
let convertJSONtoString=JSON.stringify(myJSON);
console.log(convertJSONtoString);


let info= `{
        "name":"Zakir",
        "age":25,
        "skills":["Java","C/C++","C#","Python","JavaScript"],
        "isMarried":true
}`;

let stringToJSON=JSON.parse(info);
console.log(stringToJSON);


function getDataFromASite(){

        fetch("https://jsonplaceholder.typicode.com/todos/")
                .then((response)=>{ 
                        return response.json()}) //Taking as a Json
                .then((data)=>{
                        console.log(typeof data); // Javascript Object
                        for(key in data){
                                console.log(data[key].title);
                        }
                })
}
getDataFromASite();



