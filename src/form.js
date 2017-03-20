class Form {
  registerClick() {
    $('button').click(() => {
      const username = $('input').val();
      $('#user-name').text(username);
    })
  }
}