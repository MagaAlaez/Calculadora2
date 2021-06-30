import { Multiplicacion } from './Utils';

test('multiplica bien', () => {
  expect(Multiplicacion(0, 2)).toBe(0);
  expect(Multiplicacion(2, 0)).toBe(0);
  expect(Multiplicacion(2, 2)).toBe(4);
});
