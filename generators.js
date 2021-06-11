function* generator(){
    yield "Call 1";
    yield "Call 2";
    yield "Call 3";
}

const gen = generator(); //generator Object

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
