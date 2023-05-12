class StorageUtility {
  constructor() {
    this.storage = window.localStorage;
  }

  static get(key) {
    return this.storage.getItem(key);
  }

  static set(key, value) {
    this.storage.setItem(key, value);
  }

  static remove(key) {
    this.storage.removeItem(key);
  }

  static clear() {
    this.storage.clear();
  }
}
