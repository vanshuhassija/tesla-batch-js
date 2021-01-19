//Default binding
// decide the call site and this will refer to call site object

// function foo() {
//   console.log("This is ", this.a); //console.log(window.a)
// }

// const a = "Hello";

// foo();

//implicit Binding

// const a = {
//   caller: "Some Person",
//   foo: function () {
//     console.log(this.caller);
//   },
// };

// var caller = "Some other Person";
// console.log("foo", a.foo, a.foo());
// let storedFunction = a.foo;
// storedFunction();

//Explicit Binding

//bind, call, apply

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu",
//   getPokeName: function () {
//     var fullname = this.firstname + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function () {
//   console.log(this.getPokeName() + " I chose you");
// };

// var logPokemon = pokemonName.bind(pokemon);
// logPokemon();

//call

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu",
//   getPokeName: function () {
//     var fullname = this.firstname + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function (snack, hobby) {
//   console.log(
//     this.getPokeName() +
//       " I chose you and my favourite snack is" +
//       snack +
//       "And Hobby is" +
//       hobby
//   );
// };

// pokemonName.call(pokemon, "pizza", "reading");

//apply
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu",
//   getPokeName: function () {
//     var fullname = this.firstname + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function (snack, hobby) {
//   console.log(
//     this.getPokeName() +
//       " I chose you and my favourite snack is" +
//       snack +
//       "And Hobby is" +
//       hobby
//   );
// };

// var something = function(){
//   console.log("This", this.pokemonName("Burger", "Playing"));
// };

// pokemonName.apply(pokemon, ["pizza", "reading", "Extra Param"]);
// something();

//Exception=> Arrow Functions

function foo() {
  return "Hello";
}

// const foo = () => "Hello";

// Arrow Functions adopt this binding of enclosing scope
//Lexical Binding of arrow functions cannot be ovverriden (even explicitly)

// function foo() {
//   return (a) => {
//     console.log(this.a);
//   };
// }
// var obj1 = { a: 2 };
// var obj2 = { a: 3 };
// var bar = foo.call(obj1);
// bar.call(obj2);

function foo() {
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}

var obj = { a: 2 };
foo.call(obj);

//Case 4: New Binding
