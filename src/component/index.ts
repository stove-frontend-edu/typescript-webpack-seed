export * from './event-action-manager';
export * from './event-dispatcher';
export * from './event-store';
import { EVENT_STATE_CODE } from './event-const';
import { EventDispatcher } from './event-dispatcher';

export const dispatchEventByAction = <T = any>(
    event: EVENT_STATE_CODE,
    param?: T
) => {
    dispatchEvent(
        new CustomEvent(EventDispatcher.ACTION_STORE_EVENT, {
            detail: {
                action: event,
                param,
            },
        })
    );
};
