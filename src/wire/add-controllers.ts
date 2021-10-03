import { Builder, ScopeType } from 'depinj-js';

import { GetCounterController } from '../controllers/get-counter';
import { PostCounterController } from '../controllers/post-counter';
import { COUNTER_SERVICE } from './add-services';

export const GET_COUNTER_CONTROLLER = 'GetCounterController';
export const POST_COUNTER_CONTROLLER = 'PostCounterController';

export function registerControllers(builder: Builder): Builder {
	return builder
		.addType(GET_COUNTER_CONTROLLER, GetCounterController, [COUNTER_SERVICE], ScopeType.Transient)
		.addType(POST_COUNTER_CONTROLLER, PostCounterController, [COUNTER_SERVICE], ScopeType.Transient);
}