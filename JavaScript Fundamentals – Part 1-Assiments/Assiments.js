// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)

// let country = "Egypt";
// let continent="Africa";
// let population="20 millions";



// 2. Log their values to the console

// console.log(country);
// console.log(continent);
// console.log(population);


//---------------------------------------------------------------------------------------------

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet


// let  isIsland = false ;
// let language ; 




// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console


// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof language);

//----------------------------------------------------------------------------------------------


// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)

//language="Arabic" ; 



// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.


const  country = "Egypt";
const continent="Africa";

const isIsland = false ;
const language = "Arabic" ; 




// 3. Try to change one of the changed variables now, and observe what happens

language ="English" ; 

//Uncaught TypeError: Assignment to constant variable.


//a newer error caled typeerror