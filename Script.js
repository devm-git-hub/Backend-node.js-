let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("Hello, " + process.argv[i] + "!");
}


//MODULES.EXPORTS
const someValue = require('./math');

console.log(someValue.sum(90, 10));
console.log(someValue.multiply(90, 10));
console.log(someValue.g);
console.log(someValue.pi);

//EXPORINTING HOLE DIRECTREY

const Furits = require('./Furits');
console.log(Furits);