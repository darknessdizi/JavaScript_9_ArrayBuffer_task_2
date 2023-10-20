import ArrayBufferConverter from '../array-buffer-converter';
import getBuffer from '../get-buffer';

test('Работа конвертора', () => {
    const buffer = getBuffer();
    const obj = new ArrayBufferConverter();
    expect(obj).toBeDefined();

    obj.load();
    expect(obj.object).not.toBeDefined();

    obj.load(buffer);
    expect(obj.object).toBeTruthy();
    expect(obj.object).toBeDefined();
    expect(obj.object).toBeInstanceOf(Uint16Array);

    const standard = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(obj.toString()).toBeDefined();
    expect(obj.toString()).toBe(standard);
});