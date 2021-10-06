import { toInjectedErrorHandler, toInjectedHandler } from 'depinj-express';
import { Injector } from 'depinj-js';
import express, { Router } from 'express';

import {
  GET_COUNTER_CONTROLLER,
  POST_COUNTER_CONTROLLER,
  ERROR_LOGGER_HANDLER,
  ERROR_MAPPER_HANDLER
} from './wire/add-handlers';
import { registerAll } from './wire/register-all';

export function createExpressApplication() {
  const app = express();
  const router = Router();

  // Retrieving instances
  const registry = registerAll();
  const injector = new Injector(registry);

  // Creating the middleware instances - this should be the only part of the code that knows both
  // Express and Depinj
  router.post(
    '/counter',
    toInjectedHandler(injector, POST_COUNTER_CONTROLLER)
  );
  router.get(
    '/counter',
    toInjectedHandler(injector, GET_COUNTER_CONTROLLER)
  );

  // Common error handlers
  router.use(toInjectedErrorHandler(injector, ERROR_LOGGER_HANDLER));
  router.use(toInjectedErrorHandler(injector, ERROR_MAPPER_HANDLER));

  app.use(router);

  return app;
}
