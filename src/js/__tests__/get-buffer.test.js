import getBuffer from '../get-buffer';

test('Функция getBuffer определена', () => {
    const buffer = getBuffer();
    expect(buffer).toBeDefined();
});