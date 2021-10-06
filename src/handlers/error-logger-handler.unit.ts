import { NextFunction, Request, Response } from 'express';

import { ILogger } from '../services/i-logger';

import { ErrorLoggerHandler } from './error-logger-handler';

describe('ErrorLoggerHandler', () => {
  it('logs all errors', async () => {
    // Arrange
    const logger = ({
      error: jest.fn(),
    } as any) as ILogger;
    const instance = new ErrorLoggerHandler(logger);
    const responseMock = ({
      json: jest.fn(),
    } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    const error = new Error('err');
    await instance.handle(error, {} as Request, responseMock, nextFuncMock);

    // Assert
    expect(logger.error).toHaveBeenCalledWith(error);
    expect(nextFuncMock).toHaveBeenCalledWith(error);
  });
});
