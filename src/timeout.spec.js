describe('Timeout tests', () => {
  it('tests that a callback is called', (done) => {
    window.setTimeout(() => {
      done();
    }, 100);
  });

  describe('async()', () => {
    it('calls the callback with the given paramter', (done) => {
      const callbackParam = 'Al Bundy';
      const timeout = new Timeout();
      const callback = (parameter) => {
        expect(parameter).toEqual(callbackParam);
        done();
      };

      timeout.async(callback, callbackParam);
    });

    it('calls the callback with the given parameter using spy', (done) => {
      const callback = jasmine.createSpy('callback');
      callback.and.callFake(() => {
        expect(callback).toHaveBeenCalledWith(callbackParam);
        done();
      });
      const callbackParam = 'Al Bundy';
      const timeout = new Timeout();

      timeout.async(callback, callbackParam);
    });
  });
});