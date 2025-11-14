import { it, describe , expect } from "vitest";
import { isEven } from "../src/question2";

describe ("isEven()", () => {
    it("returns 'even' for the even numbers", () => {
        expect(isEven(44)).toBe("even");
        expect(isEven(12)).toBe("even");
        expect(isEven(10)).toBe("even");
        expect(isEven(32)).toBe("even");
    });
    
    it("returns 'odd' for odd numbers", () => {
        expect(isEven(13)).toBe("odd");
        expect(isEven(23)).toBe("odd");
        expect(isEven(1)).toBe("odd");
        expect(isEven(35)).toBe("odd");
    })
});