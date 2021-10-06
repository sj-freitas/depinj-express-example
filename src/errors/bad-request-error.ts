import { StatusCodeErrors } from "./status-code-errors";

export class BadRequestError extends StatusCodeErrors {
  constructor(message: string) {
    super(message);
  }

  public get statusCode(): number { return 400; }
}