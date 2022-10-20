import { addEvent, removeEvent, removeAction } from './';
import { dispatchEventByAction } from './';
import { EVENT_STATES } from './event-const';

export class BodyComponent {
    private currentName: string;

    constructor() {
        this.init();
    }

    init() {
        addEvent(EVENT_STATES.BEFORE, this.setName);
        addEvent(EVENT_STATES.AFTER, this.setName);
        addEvent(EVENT_STATES.DESTORY, this.destroy);

        document.getElementById('btn').addEventListener('click', () => {
            dispatchEventByAction(EVENT_STATES.BEFORE);
        });
        
        document.getElementById('btn2').addEventListener('click', () => {
            dispatchEventByAction(EVENT_STATES.AFTER);
        });

        document.getElementById('btn3').addEventListener('click', () => {
            dispatchEventByAction(EVENT_STATES.DESTORY);
        });
    }

    selection() {
        (document.querySelector('#result') as HTMLElement).innerText =
            this.currentName;
    }

    destroy = () => {
        this.currentName = '';
        this.selection();
        removeEvent(EVENT_STATES.BEFORE, this.setName);
        removeAction(EVENT_STATES.AFTER);
    }

    setName = (result: any) => {
        this.currentName = result;
        this.selection();
    };
}
