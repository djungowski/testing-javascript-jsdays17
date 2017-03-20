describe('Array specs', () => {
  describe('forEach()', () => {
    it('throws if no callback is provided', () => {
      const someArray = [];

      expect(someArray.forEach).toThrowError();
    });

    it('does not throw if a callback is provided', () => {
      const someArray = [];

      const throwWrapper = someArray.forEach.bind(someArray, () => {});

      expect(throwWrapper).not.toThrow();
    });
  });
});