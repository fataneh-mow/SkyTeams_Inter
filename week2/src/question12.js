/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 11:  Simple Calculator using switch-case 
    Description: Input two numbers and an operator (+, -, *, /) and compute the result. 
    Example: 
    Input: 
    5, 3, + 
    Output: 
    8     
   
*/

export function trafficLight (color) {
    if (typeof color !== "string") {
        return `${color} is not applicable`;
    };

    switch (color.toLocaleLowerCase().trim()) {
        case "red":
            return "Stop"; 
        case "yellow":
            return "Ready";  
        case "green":
            return "Go";
        default:
            return `${color} is not applicable`
    };
};