import { Builder, ScopeType } from 'depinj-js';

import { GetCounterController } from '../handlers/get-counter-controller';
import { PostCounterController } from '../handlers/post-counter-controller';
import { ErrorLoggerHandler } from '../handlers/error-logger-handler';
import { ErrorMapperHandler } from '../handlers/error-mapper-handler';

import { COUNTER_SERVICE, LOGGER } from './add-services';

export const GET_COUNTER_CONTROLLER = 'GetCounterController';
export const POST_COUNTER_CONTROLLER = 'PostCounterController';
export const ERROR_LOGGER_HANDLER = 'ErrorLoggerHandler';
export const ERROR_MAPPER_HANDLER = 'ErrorMapperHandler';

export function registerControllers(builder: Builder): Builder { 
  return builder
    .addType(GET_COUNTER_CONTROLLER, GetCounterController, [COUNTER_SERVICE, LOGGER], ScopeType.Transient)
    .addType(POST_COUNTER_CONTROLLER, PostCounterController, [COUNTER_SERVICE, LOGGER], ScopeType.Transient)
    .addType(ERROR_LOGGER_HANDLER, ErrorLoggerHandler, [LOGGER], ScopeType.Transient)
    .addType(ERROR_MAPPER_HANDLER, ErrorMapperHandler, [], ScopeType.Transient);
}
