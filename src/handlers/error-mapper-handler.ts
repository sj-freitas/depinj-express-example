import { NextFunction, Request, Response } from 'express';

import { StatusCodeErrors } from '../errors/status-code-errors';

/**
 * An error handler that always logs errors.
 */
export class ErrorMapperHandler {
  public async handle(error: Error, _: Request, res: Response, next: NextFunction) {
    if (error instanceof StatusCodeErrors) {
      res.status(error.statusCode).send();
      next();
      return;
    }

    res.status(500).send();
    next();
    return;
  }
}