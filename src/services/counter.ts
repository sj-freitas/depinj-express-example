/**
 * A simple service that keeps a counter.
 */
export class Counter {
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
