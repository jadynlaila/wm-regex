// phone numbers
// (123) 123 1234
// 123-123-1234
// 1234567890
// (123)123-1234

const string = '(123)123-1234'
const re = /^\(?[0-9]{3}[\)-]?[0-9]{3}[ -]?[0-9]{4}$/

console.log(re.test(string));



// checking if a number is between 0 and 100
// 3 
// 92
// 100

const str = '38'
const re2 = /^[0-9]$|^[1-9][0-9]$|^100$/
console.log(re2.test(str));


//checks a password to make sure it
//1. starts w 3 letters capital or lowercase
//2. any 1 optional special character
//3. ends in 1 or more even numbers 

const str3 = 'asb*48'
const re3 = /^[a-zA-Z]{3}[^a-zA-Z0-9 /n/t]?[02468]+$/
console.log(re3.test(str3));


