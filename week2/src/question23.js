/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 22. Print even numbers in a range 
    Description: Input start and end values, print all even numbers between them. 
    Example: 
    Input: 
    1, 10 
    Output: 
    2, 4, 6, 8, 10

*/

export function fibonacciSeries(n) {
    if (isNaN(Number(n)) || n === undefined || n === null) {
        return "Insert a number";
    }

    n = Number(n);

    if (n <= 0) {
        return [];
    };

    const sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    };

    return sequence;
};

