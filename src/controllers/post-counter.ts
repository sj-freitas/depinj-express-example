import { NextFunction, Request, Response } from 'express';

import { Counter } from '../services/counter';

/**
 * A simple controller that increments a counter.
 */
export class PostCounterController {
  private counter: Counter;

  constructor(counter: Counter) {
    this.counter = counter;
  }

  public async handle(_: Request, res: Response, next: NextFunction) {
    this.counter.increment();

    res.status(204).send();

    next();
  }
}