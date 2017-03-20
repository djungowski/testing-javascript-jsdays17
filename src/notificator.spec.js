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

      Date = originalDate;
    });
  });
});