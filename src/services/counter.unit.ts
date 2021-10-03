import { Counter } from './counter';

describe('Counter', () => {
  describe('getValue', () => {
    it('retrieves 0 by default', () => {
      // Arrange
      const counter = new Counter();

      // Act
      // Assert
      expect(counter.getValue()).toBe(0);
    });

    it('retrieves the same value as parameterized', () => {
      // Arrange
      const counter = new Counter(5);

      // Act
      // Assert
      expect(counter.getValue()).toBe(5);
    });
  });

  describe('increment', () => {
    it('increment starts from 0 by default', () => {
      // Arrange
      const counter = new Counter();

      // Act
      counter.increment();

      // Assert
      expect(counter.getValue()).toBe(1);
    });

    it('Increments from the given start value', () => {
      // Arrange
      const counter = new Counter(42);

      // Act
      counter.increment();

      // Assert
      expect(counter.getValue()).toBe(43);
    })
  });
});
