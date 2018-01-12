'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);
console.log(myString.length);

myString = myString.replace(/,/g, " "); //https://www.w3schools.com/jsref/jsref_replace.asp
console.log(myString);