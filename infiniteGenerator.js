function* infinite(){
    let counter = 0;
    while(true){
        yield counter++;
    }
}

const infiniteGen = infinite();

console.log("Generator 2:");
console.log(infiniteGen.next());
console.log(infiniteGen.next());
console.log(infiniteGen.next());
//continue..