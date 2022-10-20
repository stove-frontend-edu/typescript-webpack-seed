import './main-style.css';
import {Store, Dispatcher, Action} from './core';
import {View} from './component/View';

const excute = () => {
    let store:Store = new Store();
    let dispatcher:Dispatcher = new Dispatcher(store);
    let action:Action = new Action(dispatcher);
    let view:View = new View(store,action);

    view.setMyState('Flux');
    view.display();

    // 3초 뒤 display로 변경
    setTimeout(() => {
        view.setMyState('Pattern');
        view.display()
    }, 3000)

};
excute();