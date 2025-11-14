/**
 * Author: Fatana Mawlawizadeh
 
* Date: Nov, 13rd, 2025

* Question: Write a function to check for even, odd or prime numbers

*/
export function isEven(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

export function isPrime (number) {
    if(number < 2){
        console.log(`${number} must be greater than 2 to check if it's prime or not!`);
        return; 
    }
    
    for(let i = 2; i < Math.ceil(number / 2); i++){
        if(number % i === 0){
            console.log(`${number} is not prime`);
            return false;
        }
    }
    
    console.log(`${number} is prime`);
    return true;
}