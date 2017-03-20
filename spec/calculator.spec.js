describe('Calculator Test Suite', () => {
  let Calculator;
  let calc;

  beforeEach(() => {
    Calculator = require('../node/calculator');
    calc = new Calculator();
  });

  it('can be instantiated', () => {
    expect(calc).toEqual(jasmine.any(Calculator));
  });

  describe('add()', () => {
    it('adds two numbers', () => {
      const result = calc.add(4, 5);

      expect(result).toBe(9);
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers', () => {
      const result = calc.multiply(3, 60);

      expect(result).toBe(180);
    });
  });
});