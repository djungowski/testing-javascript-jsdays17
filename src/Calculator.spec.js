describe('Calculator Test Suite', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
//    console.info('aussen');
  });

  afterEach(() => {
//    console.info('afterEach aussen');
  });

  describe('sum()', () => {
    beforeEach(() => {
      this.calc = new Calculator();
//      console.info('innen');
    });

    beforeEach(() => {
//      console.info('innen 2');
    });

    afterEach(() => {
//      console.info('afterEach innen');
    });

    it('uses this.calc', () => {
      const result = this.calc.sum(1, 2);

      expect(result).toEqual(3);
    });

    it('sums up 1 and 2 to 3', () => {
      const result = calc.sum(1, 2);

      expect(result).toEqual(3);
    });

    it('sums up 2 and 4 to 6', () => {
      const result = calc.sum(2, 4);

      expect(result).toEqual(6);
    });

    it('sums up 2 and 1 to 3', () => {
      const result = calc.sum(2, 1);

      expect(result).toEqual(3);
    });
  });

  describe('subtract()', () => {
    it('is not implemented and returns undefined', () => {
      const result = calc.subtract();

      expect(result).toBeUndefined();
    });
  });

  describe('multiplyWithRandom()', () => {
    it('uses Math.random custom mock to multiply a number', () => {
      const math = {
        random: () => {
          return 3;
        }
      };

      spyOn(math, 'random').and.callThrough();

      const result = calc.multiplyWithRandom(5, math);

      expect(result).toBe(15);
      expect(math.random).toHaveBeenCalled();
    });

    it('uses Math.random with spy function', () => {
      const math = {};
      math.random = jasmine.createSpy('Math.random()');
      math.random.and.returnValue(4);

      const result = calc.multiplyWithRandom(6, math);

      expect(result).toBe(24);
      expect(math.random).toHaveBeenCalled();
    });

    it('uses a spy object', () => {
      const math = jasmine.createSpyObj('Math', ['random']);
      math.random.and.returnValue(5);

      const result = calc.multiplyWithRandom(4, math);

      expect(math.random).toHaveBeenCalled();
      expect(result).toBe(20);
    });

  });

  describe('multiplyWithMathRandom', () => {
    it('mocks Math.random', () => {
      spyOn(Math, 'random').and.returnValue(6);

      const result = calc.multiplyWithMathRandom(2);

      expect(result).toBe(12);
    });
  });
});