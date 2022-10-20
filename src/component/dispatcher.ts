import { store } from "./store";

export class Dispatcher {
    public static DISPATCH_EVENT = 'dispatcher';
    public static instance: Dispatcher;

    constructor() {
        addEventListener(
            Dispatcher.DISPATCH_EVENT,
            (({detail}: CustomEvent): void => {
                console.log("dispatch event")
                store.reduce(detail.action, detail.receiver);
            }) as EventListener
        );
    }

    public static getInstance(): Dispatcher {
        if(!Dispatcher.instance) {
            Dispatcher.instance = new Dispatcher();
        }
        return Dispatcher.instance;
    }
}

export const dispatcher = Dispatcher.getInstance();
