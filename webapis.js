console.log(typeof foo);

var foo = "foo";

function foo() {
  var bam = "bam";
  console.log(bam);
}
var c = foo;

function foo() {
  var bam = "bam";
  console.log(bam);
}

var foo;

console.log(typeof foo);
foo = "foo";
