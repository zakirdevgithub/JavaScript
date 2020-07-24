let d=document.querySelector('#box1');
console.log(d)
let allDiv=document.querySelectorAll('div');
console.log(allDiv);
console.log(allDiv[2]);

allDiv.forEach((e)=>{
    console.log(e);
});

//getElementById
let id=document.getElementById('navbar');
console.log(id);

//getElementsByClassName

let cls= document.getElementsByClassName('box');

Array(cls).forEach( e=>{
    console.log(e);
});

//getElementsByTagName

let els= document.getElementsByTagName('p');

Array(els).forEach( e=>{
    console.log(e);
});

//innerText
const paras=document.querySelectorAll('p');

paras.forEach( e=>{
    e.innerText="Zakir Hossain Jewel";
});

//innerHTML
const anchorTag=document.querySelector('#navbar');
anchorTag.innerHTML +=` <a href="#" class="dropdown1">Google</a>`


// getAttribute
let attr= document.querySelector('#navbar > a');
console.log(attr.getAttribute("href"));

let anotherAttribute=document.querySelector("#navbar + a");
console.log(anotherAttribute.getAttribute("href"));

//setAttribute

attr.setAttribute("href","https://www.google.com");

let divv= document.querySelectorAll('.box');

divv.forEach( e=>{
    e.setAttribute("style","color: red; font-size:60px;");
});

//Traversing
//children, childNodes,nodeName,firstChild, firstElementChild, 
//lastElementChild, nextSibling,nextElementSibling, parentNode


let mainClass=document.querySelector(".container");
console.log(mainClass.children);
console.log(mainClass.childNodes);
console.log(mainClass.nodeName);
console.log(mainClass.firstChild);
console.log(mainClass.firstElementChild);
console.log(mainClass.lastElementChild);
console.log(mainClass.firstChild.nextSibling);
console.log(mainClass.firstElementChild.nextElementSibling);
console.log(mainClass.firstElementChild.parentElement);
console.log(mainClass.firstElementChild.parentNode);

//parentElement, nextElementSibling, previousElementSibling
let relation= document.querySelector(".dropdown2");
console.log("Parent Element");
console.log(relation.parentElement.parentElement.parentElement);

console.log(relation.nextElementSibling.nextElementSibling);
console.log(relation.previousElementSibling);


