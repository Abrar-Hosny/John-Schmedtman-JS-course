/* Write your code below. Good luck! 🙂 */

const calcTip =function(bill){
    let tip ; 
    return   bill>=50 && bill<=300  ? tip = 15/100 *bill : tip = 20/100 *bill ; 
        
}
 
               

const x= calcTip(100);
const bills = [125,555,44];

const tips = [calcTip(125), calcTip(555) ,calcTip(44)];

console.log("tips => " , tips); 
console.log("bills => " , bills); 

let total =[];

for(let x = 0 ; x< 3 ; x++){
    total[x]=bills[x]+tips[x];
}


console.log("total 🐝" ,total);
    


