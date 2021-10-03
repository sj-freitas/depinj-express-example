import { NextFunction, Request, Response } from 'express';

import { Counter } from '../services/counter';
import { PostCounterController } from './post-counter';

describe('PostCounterController', () => {
  it('creates an instance that calls counter increment on handle', () => {
    // Arrange
    const counterServiceMock = ({
      increment: jest.fn(),
    } as any) as Counter;
    const instance = new PostCounterController(counterServiceMock);
    const responseStatusMock = {
      send: jest.fn(),
    };
    const responseMock = ({
      status: jest.fn(() => responseStatusMock),
    } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    instance.handle({} as Request, responseMock, nextFuncMock);

    // Assert
    expect(counterServiceMock.increment).toHaveBeenCalledTimes(1);
    expect(responseMock.status).toHaveBeenLastCalledWith(204);
    expect(responseStatusMock.send).toHaveBeenCalledTimes(1);
    expect(nextFuncMock).toHaveBeenCalledTimes(1);
  });
});
