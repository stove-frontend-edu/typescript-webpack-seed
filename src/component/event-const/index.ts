export const EVENT_STATES = {
    BEFORE: 'before',
    AFTER: 'after',
    DESTORY: 'destory'
} as const;

export type EVENT_STATE_CODE = typeof EVENT_STATES[keyof typeof EVENT_STATES]