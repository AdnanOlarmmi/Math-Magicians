import calculate from "../logic/calculate";

describe("Test Calculate addition", () => {

    const obj = {
        total: 2,
        next: 2,
        operation: '+'
    }
    const calc = calculate(obj, '=');
    it('test for addition', ()=> {
        expect(calc["total"]).toBe('4');
    })
})

describe("Test Calculate division", () => {

    const obj = {
        total: 6,
        next: 2,
        operation: '÷'
    }
    const calc = calculate(obj, '=');
    it('test for division', ()=> {
        expect(calc["total"]).toBe('3');
    })
})