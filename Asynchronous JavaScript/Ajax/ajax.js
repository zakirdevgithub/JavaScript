//With normal text File

function myFunc(){

    const xhr= new XMLHttpRequest();
    xhr.open("GET", "myText.txt",true);

    xhr.onprogress =function(){
        console.log("On Progress");
    }

    xhr.onload =function(){
        if(this.status ===200){
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured");
        }
       
    }

    xhr.send();
    

}
myFunc();


//With JSON File
function ajaxJSON(){
    
    const xhr=new XMLHttpRequest();
    
    xhr.open("GET","sampleJSON.json",true);
    xhr.getResponseHeader("content-type","application/json");

    xhr.onprogress=function(){
        console.log("ON PROGRESS");
    }

    xhr.onload=function(){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
        }
        else{
            console.log("Some error occured");
        }
    }

    xhr.send();
}
ajaxJSON();

//POST request

function postJSON(){
    
    const xhr=new XMLHttpRequest();
    xhr.open("POST","http://dummy.restapiexample.com/api/v1/create",true);
    xhr.getResponseHeader("content-type","application/json");

    xhr.onprogress=function(){
        console.log("On Progress");
    }

    xhr.onload=function(){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
        }
        else {
            console.log("Some error Found");
        }
    }

    let sampleDATA=`{"name":"test","salary":"123","age":"23"}`;
    xhr.send(sampleDATA);
}

postJSON();
