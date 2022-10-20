import { EVENT_STATE_CODE } from './event-const';
import { EventDispatcher } from './event-dispatcher';
import { store } from './event-store';


function printStore(funName: string) {
    console.log(`this is a ${funName}`)
    console.log(store.data);
    Object.keys(store.data).forEach((d)=>{console.log(d)});
}

export class EventActionManager {
    public static instance: EventActionManager;

    private _dispatcher: EventDispatcher;

    public get dispatcher(): EventDispatcher {
        return this._dispatcher;
    }

    constructor() {
        this._dispatcher = new EventDispatcher();
    }

    public static getInstance(): EventActionManager {
        return !EventActionManager.instance
            ? (EventActionManager.instance = new EventActionManager())
            : EventActionManager.instance;
    }
}

export const eventActionManager: EventActionManager =
    EventActionManager.getInstance();

export const addAction = (action: EVENT_STATE_CODE, func: Function): void => {
    if (!store.data[action]) {
        store.data[action] = {
            data: null,
            action: func,
            receivers: [],
        };
    } else {
        store.data[action].action = func;
    }
    printStore('add Action');
};

export const addEvent = (action: EVENT_STATE_CODE, func: Function): void => {
    if (!store.data[action]) {
        store.data[action] = {
            data: null,
            receivers: [],
        };
    }
    const funcList: Array<any> = store.data[action].receivers as Array<any>;
    if (!funcList.some((x) => x === func)) {
        funcList.push(func);
    }
    printStore('add Event');
};

export const removeEvent = (action: EVENT_STATE_CODE, event: Function): void => {
    if (store.data[action] === null) return;
    const funcList: Array<any> = store.data[action].receivers as Array<any>;
    for (let i = 0; i < funcList.length; i++) {
        if (funcList[i] === event) {
            funcList.splice(i, 1);
            printStore('remove Event');
            return;
        }
    }
};

export const removeAction = (action: EVENT_STATE_CODE): void => {
    if (store.data[action] === null) return;
    const funcList: Array<any> = store.data[action].receivers as Array<any>;
    funcList.length = 0;
    store.data[action] = null;
    printStore('remove Action');
};

export const clearActionAll = (): void => {
    for (const action in store.data) {
        if (store.data.hasOwnProperty(action)) {
            removeAction(action as EVENT_STATE_CODE);
        }
    }
    printStore('clear actions all ');
};
