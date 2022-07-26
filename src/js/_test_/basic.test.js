import Validator from '../app';

test('valid name', () => {
  expect(new Validator('qwerty').validateUsername()).toBe(true);
});

test('over 3 number', () => {
  expect(new Validator('qwe1234qwe').validateUsername()).toBe(false);
});

test('first number', () => {
  expect(new Validator('1qwe').validateUsername()).toBe(false);
});

test('end number', () => {
  expect(new Validator('qwe1').validateUsername()).toBe(false);
});

test('first dash', () => {
  expect(new Validator('-qwe').validateUsername()).toBe(false);
});

test('end dash', () => {
  expect(new Validator('qwe-').validateUsername()).toBe(false);
});

test('first lowline', () => {
  expect(new Validator('_qwe').validateUsername()).toBe(false);
});

test('end lowline', () => {
  expect(new Validator('qwe_').validateUsername()).toBe(false);
});

/* test('toBe', () => {
  expect(result).toBe(gradation);
}); */
