let select=document.querySelectorAll(".container > div > ul> li");

select.forEach(e =>{
 
    let divID=e.parentNode.parentNode.getAttribute("id");
    if(divID==="box1"){
        let getListClass=e.getAttribute("class");
        if(getListClass==="list1"){
            e.innerText="Zakir";
        }

        if(getListClass==="list2"){
            e.innerText="25";
        }
        if(getListClass==="list3"){
            e.innerText="5.7";
        }
        
    }

    if(divID==="box2"){
        let getListClass=e.getAttribute("class");
        if(getListClass==="list1"){
            e.innerText="Shovon";
        }

        if(getListClass==="list2"){
            e.innerText="25";
        }
        if(getListClass==="list3"){
            e.innerText="5.8";
        }
        
    }
    if(divID==="box3"){
        let getListClass=e.getAttribute("class");
        if(getListClass==="list1"){
            e.innerText="Rakib";
        }

        if(getListClass==="list2"){
            e.innerText="23";
        }
        if(getListClass==="list3"){
            e.innerText="5.11";
        }
        
    }

    if(divID==="box4"){
        let getListClass=e.getAttribute("class");
        if(getListClass==="list1"){
            e.innerText="Shuvo";
        }

        if(getListClass==="list2"){
            e.innerText="35";
        }
        if(getListClass==="list3"){
            e.innerText="5.8";
        }
        
    }

    if(divID==="box5"){
        let getListClass=e.getAttribute("class");
        if(getListClass==="list1"){
            e.innerText="Limon";
        }

        if(getListClass==="list2"){
            e.innerText="25";
        }
        if(getListClass==="list3"){
            e.innerText="5.4";
            e.classList.add("Lover");
        }
        
    }

});

//createElement,createTextNode,append, appendChild
let para= document.querySelector("#box1 >ul");
let addingE= document.createElement("li");
let addingText=document.createTextNode("Shahjalal University of Science and Technology");
addingE.append(addingText);
para.appendChild(addingE);

//replaceWith, replaceChild
let replacer=document.querySelector("#box1");
let replacable=document.querySelector("#box2");
replacer.replaceWith(replacable);

let lastDiv=document.getElementById("last");
let newItem=document.createElement("li");
let newText=document.createTextNode("Rasel");
 newItem.append(newText);


lastDiv.replaceChild(newItem, lastDiv.children[0]);
lastDiv.removeChild(lastDiv.children[1]);
lastDiv.removeAttribute("style");



