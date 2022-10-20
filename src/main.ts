import './main-style.css';

import { addAction } from './component';
import { EVENT_STATES } from './component/event-const';
import { DocumentSelectionExample } from './component/document-selection-example';
import { BodyComponent } from './component/body-component';


const actionInit = () => {
    addAction(EVENT_STATES.BEFORE, () => {        
        return '반가워';
    });
    addAction(EVENT_STATES.AFTER, () => {
        return '좋은 하루 되렴';
    });
    addAction(EVENT_STATES.DESTORY, ()=>{});
};

const excute = () => {
    actionInit();
    new BodyComponent();
    const documentSelectionExample = new DocumentSelectionExample();
};

excute();