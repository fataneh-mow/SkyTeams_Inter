/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Compute Simple and Compound Interest

    Example: 
    Input: 
    3665 
    Output: 
    1 hr, 1 min, 5 sec 
*/

export function convertTime (allSeconds) {
    let remaining = Math.floor(allSeconds % 3600);
    let hours = Math.floor(allSeconds / 3600);
    let minutes = Math.floor(remaining / 60);
    let seconds = Math.floor(remaining % 60);

    return `${hours} hr, ${minutes} m, ${seconds} s`
}