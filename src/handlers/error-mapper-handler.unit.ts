import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '../errors/bad-request-error';

import { ErrorMapperHandler } from './error-mapper-handler';

describe('ErrorLoggerHandler', () => {
  it('maps an error of BadRequest to a 400', () => {
    // Arrange
    const instance = new ErrorMapperHandler();
    const responseStatusMock = {
        send: jest.fn(),
      };
      const responseMock = ({
        status: jest.fn(() => responseStatusMock),
      } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    const error = new BadRequestError('err');
    instance.handle(error, {} as Request, responseMock, nextFuncMock);

    // Assert
    expect(responseMock.status).toHaveBeenCalledWith(400);
    expect(responseStatusMock.send).toHaveBeenCalled();
  });

  it('maps an unknown error to 500', async () => {
    // Arrange
    const instance = new ErrorMapperHandler();
    const responseStatusMock = {
        send: jest.fn(),
      };
      const responseMock = ({
        status: jest.fn(() => responseStatusMock),
      } as any) as Response;
    const nextFuncMock = jest.fn() as NextFunction;

    // Act
    const error = new Error('err');
    await instance.handle(error, {} as Request, responseMock, nextFuncMock);

    // Assert
    expect(responseMock.status).toHaveBeenCalledWith(500);
    expect(responseStatusMock.send).toHaveBeenCalled();
  });
});
