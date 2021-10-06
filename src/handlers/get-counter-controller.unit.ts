import { NextFunction, Request, Response } from 'express';

import { ICounter } from '../services/i-counter';
import { ILogger } from '../services/i-logger';
import { BadRequestError } from '../errors/bad-request-error';

import { GetCounterController } from './get-counter-controller';

describe('GetCounterController', () => {
  it('calls next with error when there are query parameters', async () => {
    // Arrange
    const counterServiceMock = ({
      getValue: jest.fn(),
    } as any) as ICounter;
    const logger = ({
      info: jest.fn(),
    } as any) as ILogger;
    const instance = new GetCounterController(counterServiceMock, logger);
    const requestMock = ({
      query: { foo: 'bar' }
    } as any) as Request;
    const responseMock = {} as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    await instance.handle(requestMock, responseMock, nextFuncMock);

    // Assert
    expect(counterServiceMock.getValue).not.toHaveBeenCalled();
    expect(nextFuncMock).toHaveBeenCalledWith(expect.any(BadRequestError));
  });

  it('creates an instance that calls retrieves the counter state on handle', async () => {
    // Arrange
    const RETURN_VALUE = 3;
    const counterServiceMock = ({
      getValue: jest.fn(() => RETURN_VALUE),
    } as any) as ICounter;
    const logger = ({
      info: jest.fn(),
    } as any) as ILogger;
    const instance = new GetCounterController(counterServiceMock, logger);
    const requestMock = {
      query: {}
    } as Request;
    const responseMock = ({
      json: jest.fn(),
    } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    await instance.handle(requestMock, responseMock, nextFuncMock);

    // Assert
    expect(counterServiceMock.getValue).toHaveBeenCalledTimes(1);
    expect(responseMock.json).toHaveBeenLastCalledWith({
      count: RETURN_VALUE,
    });
    expect(nextFuncMock).toHaveBeenCalledTimes(1);
  });
});
