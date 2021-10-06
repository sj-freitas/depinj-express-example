export abstract class StatusCodeErrors extends Error {
  abstract get statusCode(): number;
}