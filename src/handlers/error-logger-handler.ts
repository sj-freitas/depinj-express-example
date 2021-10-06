import { NextFunction, Request, Response } from 'express';

import { ILogger } from '../services/i-logger';

/**
 * An error handler that always logs errors.
 */
export class ErrorLoggerHandler {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  public async handle(error: Error, _: Request, __: Response, next: NextFunction) {
    this.logger.error(error);

    next(error);
  }
}