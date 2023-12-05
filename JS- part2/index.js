// this is the strict mode that provide use 
// strict mode :-> mode that we can activated in js to write a secure code

// what is the meaning of secure mode : 

// means that makes easy for use to avoid mistakes and errors or bugs

// show use the mistakes that the js can be silent on it

// reserved key word

'use strict'



// functions : 
// running function = calling function = invoking function  استدعاء 
// function : - has block of code that is maybe repeat over and over again 

// function [name function] (){}
// calling 
// namefunction();

// function can make:
// --------------------------
// 1- reuse a piece of code
// 2- passing data = arguments = parameters 
// 3- retrieve data => return 


function fruiteprocessor (oranges, apples){
console.log(oranges,apples);
const jusice=`this is my string ${oranges} and ${apples}`;
return jusice ;
}


let x = fruiteprocessor('yoyo' , 'bobo') ;

console.log(x);

// or we can console the value directly

console.log(fruiteprocessor(5,6));


// there is 3 type of functions : 

//  1- function delartion
// we can calling first then the function but we can not do that expression function 
function age (){
    console.log("the name of the function is age "); 
}

// 2- function anyomnies / function expression 
// first write the epression function then calling it or use it

const e= function (o , b){
console.log(o,b);
}


e(5,9) ; 

age();


// 3- Arror function 
// const x= one parameter => the thing that will return ; 

// here in one line code and one parameter 
// for one line code no need for return word just the thing after the arrow will be returned automatically
// one parameter just we can do that the name => one line

// if we have multi line we will use carly pracies and will but line keyword
// if we have multi parameter we will but them in parantithes 
// no name the name of it is the name of its variable

const key = fruite => `i like ${fruite}` ; 

console.log(key('oranges')); 


// multi parameter and block of code 

const z = (f1 , f2 )=> {
   let s = `i like ${f1} and ${f2}` ;
    return s ;
}

console.log(z('yoyo' , 'bee')); 