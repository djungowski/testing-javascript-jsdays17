describe('Form specs', () => {
  it('writes the name into the corresponding DOM element', () => {
    jasmine.getFixtures().load('form.spec.html');
    const name = 'Klaus';
    const form = new Form();

    form.registerClick();
    $('input').val(name);
    $('button').click();

    expect($('#user-name')).toHaveText(name);
  });
});