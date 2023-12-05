// notice that array is composite data type 

// we have 2 ways to declare an array 
// first using [] => brackets
// let friends= [1,2,3]
// or using the Array function 
// let x= new Array(1,2,3,4)

let c = ['hello ', 'cat ' , 'dog'];
console.log(c);

let x = new Array(1,2,44); 
console.log(x); 


// x.length => length we call it property خاصية 

console.log(x.length);

// to get the last element we use 

console.log(x[x.length-1]); 
// console.log(x[2]); 

// only the primative values are not changable when we use const 
// but array is not primative so it can change values in it even we declare it as a value

// array can hold a value with different types 

const b = [12 ,'hello ','w']; 
console.log(b);

b[3]=12;
console.log(b); 


// Basic operations on arrays : 

// 1- push(value) => to add an element at the end and return length of new array 
// 2- unshift(value) => to add an element at the first  and return length of new array 
// -----------------------------------------------------------------------------------------------
// 3- pop()=> to remove an element at the end  and return popped element
// 4- shift()=> to remove an elemet at the beginning and return popped element
// 5- includes(value)=> to see if the element is in array or not here return true or false
// 6- indexOf(value) => return index


const array = new Array('a','b','c',1,2,3,4,5);
console.log(array.push('e'));  //9
console.log(array.unshift('f')); //10
console.log(array.pop()); //e
console.log(array.shift()); //f
console.log(array.includes('a')); //true
console.log(array.indexOf('a')); //0
console.log(array.indexOf('something not exist')); //-1






