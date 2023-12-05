/* Write your code below. Good luck! 🙂 */

const calcTip =function(bill){
    let tip ; 
    if(bill>=50 && bill<=300){
        tip = 15/100 *bill ; 
        
    }
    else{
                tip = 20/100 *bill ; 

        
    }
    return tip ; 
}

const x= calcTip(100);
const bills = [125,555,44];

const tips = [calcTip(125), calcTip(555) ,calcTip(44)];

let total =[];

for(let x = 0 ; x< 3 ; x++){
    total[x]=bills[x]+tips[x];
}

for(let y = 0 ; y< 3 ; y++){
console.log("total 🐝" ,y+1 ,"=> ",total[y]);
    
}

