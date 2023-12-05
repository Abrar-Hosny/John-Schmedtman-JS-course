/* Write your code below. Good luck! 🙂 */

const calAverage = (x , y , z)=> (x+y+z)/3 ; 



function checkwinner(scoreDolphins , scoreKoalas){
    if(scoreKoalas >= 2* scoreDolphins){
         console.log("the winner is Koalas");
   
        }
    else if(scoreKoalas  *2 <= scoreDolphins){
                          console.log("the winner is Dolphins") ;

    }
    else{
            console.log("No Winner");
    }
}
// here i did a mistake that i logged a non returned function 
// so i get an undefined value 
// to make emoji ctrl i 

let scoreDolphins = calAverage(44,23,71) ;
let scoreKoalas = calAverage(65,54,49);
console.log("Data 1 🐝 🏅: ");

checkwinner(scoreDolphins,scoreKoalas);


scoreDolphins= calAverage(85,54,41) ;
scoreKoalas=  calAverage(23,34,27);
console.log("Data 2 🐝 🏅 : " );
checkwinner(scoreDolphins,scoreKoalas);



