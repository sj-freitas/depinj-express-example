export interface ILogger {
  error(error: Error): void;
  info(message: string): void;
}
