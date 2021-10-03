import { toInjectedMiddleware } from 'depinj-express';
import { Injector } from 'depinj-js';
import express, { Router } from 'express';

import { GET_COUNTER_CONTROLLER, POST_COUNTER_CONTROLLER } from './wire/add-controllers';
import { registerAll } from './wire/register-all';

export function createExpressApplication() {
  const app = express();
  const router = Router();

  // Retrieving instances
  const registry = registerAll();
  const injector = new Injector(registry);

  // Creating the middleware instances - this should be the only part of the code that knows both
  // Express and Depinj
  router.post('/counter', toInjectedMiddleware(injector, POST_COUNTER_CONTROLLER));
  router.get('/counter', toInjectedMiddleware(injector, GET_COUNTER_CONTROLLER));

  app.use(router);

  return app;
}