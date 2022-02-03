


//1. starts with a,k, or x
//2. next letter is d-m
//3. ends in a .
const str = 'test1 test_01.js coding.css script.js testing.coding xf.';
const re = /[akx][d-m]\./g //all lowercase letters
console.log(str.match(re));


//1. check that the string starts with a Mr. or Ms. 
//2. then has a space 
//3. then a four letter name, first letter is caps
const str2 = 'Ms. Jane'
const re2 = /M[rs]\. [A-Z][a-z][a-z][a-z]/
console.log(str2.match(re2));