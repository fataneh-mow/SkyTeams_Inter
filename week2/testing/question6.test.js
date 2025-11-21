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

import { describe, it, expect } from "vitest";
import { convertTime } from "../src/question6";

describe("convertTime function converts time properly, it takes the total seconds as input and converts it", () => {
    it("coverts time with totalSecaond as positive number", () => {
        expect(convertTime(3600)).toBe("1 hr, 0 m, 0 s");
        expect(convertTime(75)).toBe("0 hr, 1 m, 15 s");
        expect(convertTime(7322)).toBe("2 hr, 2 m, 2 s");
    });
    it("coverts time with totalSecaond as zero", () => {
        expect(convertTime(0)).toBe("0 hr, 0 m, 0 s");
    });
    it("coverts time with totalSecaond as an edge case", () => {
        expect(convertTime(1)).toBe("0 hr, 0 m, 1 s");
        expect(convertTime(8965.99)).toBe("2 hr, 29 m, 25 s"); // ignoring decimals
    });
});