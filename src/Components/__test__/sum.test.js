import { sum } from "../sum"


test('sum function should calculated sum of two numbers', () => { 

    const result= sum(3,4)
// below line known as assertion 
    expect (result).toBe(7)
});

