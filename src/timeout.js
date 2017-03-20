class Timeout {
  async(callback, callbackParam = 'Hallo Welt', timeout = 400) {
    window.setTimeout(() => {
      callback(callbackParam);
    }, timeout);
  }
}