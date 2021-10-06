import { ICounter } from './i-counter';

/**
 * A simple service that keeps a counter.
 */
export class Counter implements ICounter {
  private track: number;

  constructor(initialState: number = 0) {
    this.track = initialState;
  }

  public increment(): void {
    this.track++;
  }

  public getValue(): number {
    return this.track;
  }
}
