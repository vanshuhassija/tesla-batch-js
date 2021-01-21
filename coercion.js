// console.log(5 + "3");
// // + is given priority for concatination
// //one is string, another is number then number is converted to string

// console.log(5 + 3 + "2");

// console.log(5 + "3" + 2);

//0,false,undefined,NaN=>falsy values
//All other values are true
// function foo() {
//   if ("false") {
//     console.log("I am in block");
//   } else {
//     console.log("I am not in block");
//   }
// }

// foo();

console.log(true + false + 3);

console.log([] + 2);

console.log(!+[]);
console.log(!+[] + [] + ![]);

console.log(true == "true");
// 1=="true"

var a = 5;
function foo() {
  a = 1;
}
foo();
console.log("Value Of a", a);
