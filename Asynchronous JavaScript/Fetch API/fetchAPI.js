// let myVar=fetch("mySelf.txt");
// console.log(myVar); //Return a Promise


//Normal Text File
    let url="mySelf.txt";
    fetch(url).then((response)=>{ 
    return response.text();
  })
    .then((data)=>{
    console.log(data);
   });

//With a local Json File
   let someJson="sampleJSON.json";
   fetch(someJson).then((response =>{
       return response.json();
   })).then(data =>{
       console.log(data.id);
   })

//With a  Array Of Json File (local)

let myArray="arrayOfJSON.json";

fetch(myArray).then(response =>{ 
    return response.json();
}).then(data =>{ 
    console.log(data);

    for(let index in data){
        console.log(data[index].id);
    }
})

//With A URL of JSON file and function

function myFunction(){
    
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
        })
}

myFunction();



let POST=	
{
    status: "success",
    data: {
        name: "tesfdgfdt",
        salary: "123",
        age: "23",
        id: 25
    }
}
function postData(){
    
    fetch("I will be write back after completing Node.js, Express.js, MongoDB", POST)
        .then( response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
}
postData();






   