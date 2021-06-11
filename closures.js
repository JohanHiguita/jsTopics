// makeAdder is a Factory function (returns a function)
const makeAdder = (x) => {
    return (y) => x + y;
} 

// add5 and add10 are clusres: "remember" its outer scope (x value)
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(3)); // 13