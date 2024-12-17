import { sum } from '../components/sum';

test("sum function should calculate the sum of two numbers", () => {
    const result = sum(2,4);
    // assertion
    expect(result).toBe(6); // passed 
    // expect(result).toBe(7); // failed
});
