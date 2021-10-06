import { ILogger } from './i-logger';

export class ConsoleLogger implements ILogger {
  private requestId: string;
  private console: Console;

  constructor (requestId: string, console: Console) {
    this.requestId = requestId;
    this.console = console;
  }

  public error(error: Error) {
    const formattedMessage = `[${this.requestId}]: ${error.message}`;

    this.console.error(formattedMessage);
  }

  public info(message: string) {
    const formattedMessage = `[${this.requestId}]: ${message}`;

    this.console.log(formattedMessage);
  }
}