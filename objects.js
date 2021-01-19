const obj = {
  a: "Hello",
  b: "World",
  c: {
    address: "I am at this address",
    city: {
      state: "Punjab",
      name: "Patiala",
    },
  },
};

//Shallow Copy
// const obj2 = Object.assign({}, obj);

//Deep Copy
// JSON.stringify= Converts obj to string and stores at new location
// JSON.parse=> Converts string to object

// Another Way (2)
let obj2;
try {
  obj2 = JSON.parse(JSON.stringify(obj));
} catch (error) {}

//Way 3 (Shallow Copy)
// const obj2 = { ...obj };

obj2.a = "Not Hello";
obj2.c.address = "I am not at this address";
console.log(obj.c.address);
console.log(obj2.c.address);

//Shallow Copy Vs Deep Copy
//Shallow: When only level 0 elements are copied by value
//Deep : Each and every object is copied by value

var a = "Hello";
var b = a;
b = "Not Hello";
console.log(b);
console.log(a);
