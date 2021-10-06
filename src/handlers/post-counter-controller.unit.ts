import { NextFunction, Request, Response } from 'express';

import { ICounter } from '../services/i-counter';
import { ILogger } from '../services/i-logger';
import { BadRequestError } from '../errors/bad-request-error';

import { PostCounterController } from './post-counter-controller';

describe('PostCounterController', () => {
  it('calls next with error when there are query parameters', async () => {
    // Arrange
    const counterServiceMock = ({
      getValue: jest.fn(),
    } as any) as ICounter;
    const logger = ({
      info: jest.fn(),
    } as any) as ILogger;
    const instance = new PostCounterController(counterServiceMock, logger);
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

  it('creates an instance that calls counter increment on handle', async () => {
    // Arrange
    const counterServiceMock = ({
      increment: jest.fn(),
    } as any) as ICounter;
    const logger = ({
      info: jest.fn(),
    } as any) as ILogger;
    const instance = new PostCounterController(counterServiceMock, logger);
    const requestMock = {
      query: {}
    } as Request;
    const responseStatusMock = {
      send: jest.fn(),
    };
    const responseMock = ({
      status: jest.fn(() => responseStatusMock),
    } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    await instance.handle(requestMock, responseMock, nextFuncMock);

    // Assert
    expect(counterServiceMock.increment).toHaveBeenCalledTimes(1);
    expect(responseMock.status).toHaveBeenLastCalledWith(204);
    expect(responseStatusMock.send).toHaveBeenCalledTimes(1);
    expect(nextFuncMock).toHaveBeenCalledTimes(1);
  });
});
