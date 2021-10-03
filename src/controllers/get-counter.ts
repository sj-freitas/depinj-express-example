import { NextFunction, Request, Response } from 'express';

import { Counter } from '../services/counter';

/**
 * A simple controller that gets the value in a counter.
 */
export class GetCounterController {
  private counter: Counter;

  constructor(counter: Counter) {
    this.counter = counter;
  }

  public async handle(_: Request, res: Response, next: NextFunction) {
    const response = {
      count: this.counter.getValue(),
    };

    res.json(response)

    next();
  }
}