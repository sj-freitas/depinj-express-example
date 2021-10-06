import { ConsoleLogger } from './console-logger';

describe('ConsoleLogger', () => {
  describe('error', () => {
    it('logs error with request id and error message', () => {
      // Arrange
      const mockConsole = ({
        error: jest.fn(),
      } as any) as Console;
      const consoleLogger = new ConsoleLogger('42', mockConsole);

      // Act
      consoleLogger.error(new Error('some message'));

      // Assert
      expect(mockConsole.error).toHaveBeenCalledWith('[42]: some message');
    });
  });

  describe('info', () => {
    it('logs error with request id and error message', () => {
      // Arrange
      const mockConsole = ({
        log: jest.fn(),
      } as any) as Console;
      const consoleLogger = new ConsoleLogger('42', mockConsole);

      // Act
      consoleLogger.info('some message');

      // Assert
      expect(mockConsole.log).toHaveBeenCalledWith('[42]: some message');
    });
  });
});
