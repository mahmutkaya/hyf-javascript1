'use strict';

let a = 1;
console.log("The value of my variable 'a' is: " + a);
let b = "1";
console.log("The value of my variable 'b' is: " + b);
let c = true;
console.log("The value of my variable 'c' is: " + c);
let d;
console.log("The value of my variable 'd' is: " + d);

console.log("the 'type of' my variables are: 'number', 'string', 'boolean' and 'undefined'");
console.log(typeof a, typeof b, typeof c, typeof d);

if (typeof a === typeof b) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}

if (typeof a === typeof c) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}

if (typeof a === typeof d) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}

if (typeof b === typeof c) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}

if (typeof b === typeof d) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}

if (typeof c === typeof d) {
  console.log("SAME TYPE");
} else {
  console.log("The comparing are not the same type.");
}