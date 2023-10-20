export default class ArrayBufferConverter {
  constructor() {
    this.object = undefined;
  }

  load(obj) {
    if (obj instanceof ArrayBuffer) {
      this.object = new Uint16Array(obj);
    }
  }

  toString() {
    let message = '';
    for (let i = 0; i < this.object.length; i += 1) {
      message += String.fromCharCode(this.object[i]);
    }
    return message;
  }
}
