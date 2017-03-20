class Notificator {
  notify(message) {
    const date = Date();
    const string = `[${date}] ${message}`;
    window.alert(string);
  }

  notifyIfNotNumber(number) {
    if (isNaN(number)) {
      throw new Error(`"${number}" is not a number`);
    }

    return number;
  }
}