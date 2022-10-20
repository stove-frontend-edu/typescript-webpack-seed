import { store } from './event-store';

export class EventDispatcher {
    public static ACTION_STORE_EVENT = 'action_store_event';

    private executeEvent = ({detail}: CustomEvent): void => {
        const currentAction = store.data[detail.action];
        if (currentAction) {
            const data = currentAction.action ? currentAction.action(detail.param) : undefined;
            if (data) {
                currentAction.data = data;
            }
            const funcList: Array<Function> = currentAction.receivers as Array<Function>;
            for (let i = 0; i < funcList.length; i++) {
                funcList[i](currentAction.data, detail.param);
            }
        }
    }

    
    private addStoreEvent() {
        addEventListener(EventDispatcher.ACTION_STORE_EVENT, this.executeEvent as EventListener)
    }

    constructor(){
        this.addStoreEvent();
    }
}