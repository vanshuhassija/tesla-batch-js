const obj = {
  name: "Vanshu",
  city: "Patiala",
  getIntro: function () {
    console.log(this.name, this.city);
  },
};

const obj2 = {
  name: "Some Person",
};

// Object.prototype.toString={

// }

// Object.prototype.hasOwnProperty={

// }

obj2.__proto__ = obj;
console.log("Object 2 Proto is ", obj2.__proto__.__proto__.__proto__);
