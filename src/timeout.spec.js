describe('Timeout tests', () => {
  it('tests that a callback is called', (done) => {
    window.setTimeout(() => {
      done();
    }, 100);
  });

  describe('async()', () => {
    let timeoutInstance;

    beforeEach(() => {
      timeoutInstance = new Timeout();
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('calls the callback with the given parameter', (done) => {
      const callbackParam = 'Al Bundy';
      const callback = (parameter) => {
        expect(parameter).toEqual(callbackParam);
        done();
      };

      timeoutInstance.async(callback, callbackParam);
      jasmine.clock().tick(400);
    });

    it('calls the callback with the given parameter using spy', (done) => {
      const callbackParam = 'Al Bundy';
      const callback = jasmine.createSpy('callback');
      callback.and.callFake(() => {
        expect(callback).toHaveBeenCalledWith(callbackParam);
        done();
      });

      timeoutInstance.async(callback, callbackParam, 2000);
      jasmine.clock().tick(2000);
    });

    it('calls window.setTimeout with the given params', () => {
      const callback = 'Some callback';
      const timeout = 5000;
      spyOn(window, 'setTimeout');

      timeoutInstance.async(callback, null, timeout);

      expect(window.setTimeout).toHaveBeenCalledWith(jasmine.any(Function), timeout);
    });
  });
});

















