describe('Dom Test suite', () => {
  it('creates a dom node', () => {
    const element = $('<div>');
    $(document.body).append(element);
    expect(element).toBeVisible();
  });

  it('creates and hides a dom node', () => {
    const element = $('<div>');
    $(document.body).append(element);
    element.hide();
    expect(element).toBeHidden();
  });

  describe('switchText()', () => {
    it('changes the text', () => {
      const text = 'Hallo Welt';
      const dom = new Dom();
      const element = '<p id="text-switch">Foobar</p>';
      jasmine.getFixtures().set(element);

      dom.switchText(text);

      expect($('#text-switch')).toHaveText(text);
    });

    it('changes the text using fixture loading', () => {
      const text = 'Hallo Sebastian';
      const dom = new Dom();
      jasmine.getFixtures().load('dom.spec.html');

      dom.switchText(text);

      expect($('#text-switch')).toHaveText(text);
    });
  });

  describe('loadText', () => {
    it('loads a text from a server', () => {
      const name = 'Bernd Stromberg';
      const responseText = {
        text: name
      };
      const httpResponse = {
        status: 200,
        responseText: JSON.stringify(responseText)
      };

      jasmine.getFixtures().load('dom.spec.html');
      jasmine.Ajax.install();

      const url = '/api/switch/info';
      const dom = new Dom();

      dom.loadText(url);
      const request = jasmine.Ajax.requests.mostRecent();
      request.respondWith(httpResponse);

      jasmine.Ajax.uninstall();

      expect($('#text-switch')).toHaveText(name);
    });
  });
});








