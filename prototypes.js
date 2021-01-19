let arr = ["a", "b", "c"];

const obj = {
  name: "Vanshu",
  city: "Patiala",
  getIntro: function () {
    console.log(this.name, this.city);
  },
};

//When you define a function, Js engine cretaes hidden properties.
function foo() {}
