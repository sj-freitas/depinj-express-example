import { validateRegistry } from 'depinj-js';

import { registerAll } from './register-all';

describe('registerAll', () => {
  it('is a valid registry', () => {
    // Arrange
    const registry = registerAll();

    // Act
    const result = validateRegistry(registry);

    // Assert
    expect(result.join('|')).toBe('');
  });
});
