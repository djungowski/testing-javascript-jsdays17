describe('Notificator Test Suite', () => {
  describe('notify()', () => {
    it('notifies with the current date using window alert', () => {
      const originalDate = Date;
      Date = jasmine.createSpy('Date');
      spyOn(window, 'alert');
      const notificator = new Notificator();
      const string = 'Hello';
      const date = '123';
      const expectedString = `[${date}] ${string}`;

      Date.and.returnValue(date);

      notificator.notify(string);
      //gleich zu const expectedString = '[' + date + '] ' + string;

      expect(Date).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(expectedString);
      expect(window.alert).toHaveBeenCalledTimes(1);

      Date = originalDate;
    });
  });

  describe('notifyIfNotNumber()', () => {
    it('throws if no number is provided', () => {
      const notificator = new Notificator();

      function throwWrapper() {
        notificator.notifyIfNotNumber('Bernd das Brot');
      }

      expect(throwWrapper).toThrowError();

    });
    
    it('uses .bind instead of throwWrapper', () => {
      const notificator = new Notificator();
      
      const throwWrapper = notificator.notifyIfNotNumber.bind(notificator, 'Bernd das Brot');
      
      expect(throwWrapper).toThrowError('"Bernd das Brot" is not a number');
    });
  });
});