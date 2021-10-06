import { NextFunction, Request, Response } from 'express';

import { ICounter } from '../services/i-counter';
import { ILogger } from '../services/i-logger';
import { BadRequestError } from '../errors/bad-request-error';

/**
 * A simple controller that gets the value in a counter.
 */
export class GetCounterController {
  private counter: ICounter;
  private logger: ILogger;

  constructor(counter: ICounter, logger: ILogger) {
    this.counter = counter;
    this.logger = logger;
  }

  public async handle(req: Request, res: Response, next: NextFunction) {
    this.logger.info('Received get counter request');

    try {
      await this.validateParameters(req);

      const response = {
        count: this.counter.getValue(),
      };
  
      res.json(response)
  
      next();
    } catch (error: unknown) {
      next(error);
    }
  }

  private async validateParameters(req: Request) {
    // Guards
    if (Object.keys(req.query).length > 0) {
      throw new BadRequestError('Query parameters are not supported');
    }
  }
}