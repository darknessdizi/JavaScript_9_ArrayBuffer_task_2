import getBuffer from './get-buffer';
import ArrayBufferConverter from './array-buffer-converter';

const buffer = getBuffer();
console.log('Исходный объект:', buffer);

const obj = new ArrayBufferConverter();
obj.load(buffer);
console.log(obj);
console.log(obj.toString());
