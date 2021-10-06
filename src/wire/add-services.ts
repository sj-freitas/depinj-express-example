import { Builder, ScopeType } from 'depinj-js';
import { v4 as uuidv4 } from 'uuid';

import { ConsoleLogger } from '../services/console-logger';
import { Counter } from '../services/counter';

export const RANDOM_UUID = 'RequestId';
export const CONSOLE = 'Console';
export const LOGGER = 'Logger';
export const COUNTER_SERVICE = 'Counter';

export function registerServices(builder: Builder): Builder {
  return builder
    .add(RANDOM_UUID, () => uuidv4(), ScopeType.OnDemand)
    .add(CONSOLE, () => console, ScopeType.SingleInstance)
    .addType(LOGGER, ConsoleLogger, [RANDOM_UUID, CONSOLE], ScopeType.Transient)
    .addType(COUNTER_SERVICE, Counter, [], ScopeType.SingleInstance);
}