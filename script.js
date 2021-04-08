const printLines = function printLines() {
    console.log(secondLine);
}

let firstLine = "I'm your first line!";
console.log(firstLine);

let secondLine = "I'm your second line!";
console.log(secondLine);

const madeOfGlass = function() {
    let thing = 'window';
    thing = 'glass';

    console.log(thing);
}
madeOfGlass();

//dio koda za treci zadatak

var auti = ["Audi", "Volvo", "Toyota"];
var automobili = ["BMW", "Volvo", "Passat"];

let arrayMachine = function (auti, automobili) {
    let finalArray = auti.concat(automobili);
    let unique = [...new Set(finalArray)];
    console.log(unique);
    document.getElementById("demo").innerHTML = unique;

}
arrayMachine(auti, automobili);

let uzlazno = function sortAscending(auti, automobili) {
    let finalArray = auti.concat(automobili);
    let unique = [...new Set(finalArray)];
    unique.sort();
    console.log(unique)
  }
uzlazno(auti, automobili);

let silazno = function sortDescending(auti, automobili) {
    let finalArray = auti.concat(automobili);
    let final = [...new Set(finalArray)];
    final.sort();
    final.reverse();
    console.log(final)
  }
silazno(auti, automobili);



//FIRST TASK
//What will be the result of the first console.log() and why?
// --> Nothing, first console.log() is not yet invoken.
//What will be the result of the second console.log() and why?
// --> Result of the second console.log() is firstLine.
//What will be the result of the third console.log() and why?
// --> Result of the third console.log() is secondLine.
//What will happen if we invoke function printLines() before its declared and why does this happen?
// --> we get an undefined (variable is not assigned with value)
//-------------------------------------------------------------------------------------------------//
//What will happen when function expression is called before the function declaration and why?
// --> even though the variable name is hoisted, the definition isn't. so it's undefined
//What will happen when function expression is called after the function declaration and why?
// --> we will invoke the function
//What is the main difference in this example?
// --> we changed declarations of variables (now the function is always secondLine/can neither be updated or re-declared)
//SECOND TASK
//What will be printed in the console and why this is possible with let?
// --> 'glass' will be printed/let is a block-scoped, "double initialization"(update)
//What will happen now and describe why?
// --> Uncaught TypeError/ const is read-only, we can not change one set value
//THIRD TASK
//


