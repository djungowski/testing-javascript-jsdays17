class Dom {
  switchText(text) {
    $('#text-switch').text(text);
  }

  loadText(url) {
    $.ajax(url, {
      success: (response) => {
        this.switchText(response.text)
      }
    });
  }
}