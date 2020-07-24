
function* createGen(){
    
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    let num=0;
    while(true){
        yield num++;
    }

}

let gen=createGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());