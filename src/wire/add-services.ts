import { Builder, ScopeType } from 'depinj-js';

import { Counter } from '../services/counter';

export const COUNTER_SERVICE = 'Counter';

export function registerServices(builder: Builder): Builder {
  return builder.addType(COUNTER_SERVICE, Counter, [], ScopeType.SingleInstance);
}