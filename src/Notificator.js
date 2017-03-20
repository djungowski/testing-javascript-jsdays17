class Notificator {
  notify(message) {
    const date = Date();
    const string = `[${date}] ${message}`;
    window.alert(string);
  }
}