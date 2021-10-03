import { NextFunction, Request, Response } from 'express';

import { Counter } from '../services/counter';
import { GetCounterController } from './get-counter';

describe('GetCounterController', () => {
  it('creates an instance that calls retrieves the counter state on handle', () => {
    // Arrange
    const RETURN_VALUE = 3;
    const counterServiceMock = ({
      getValue: jest.fn(() => RETURN_VALUE),
    } as any) as Counter;
    const instance = new GetCounterController(counterServiceMock);
    const responseMock = ({
      json: jest.fn(),
    } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    instance.handle({} as Request, responseMock, nextFuncMock);

    // Assert
    expect(counterServiceMock.getValue).toHaveBeenCalledTimes(1);
    expect(responseMock.json).toHaveBeenLastCalledWith({
      count: RETURN_VALUE,
    });
    expect(nextFuncMock).toHaveBeenCalledTimes(1);
  });
});
