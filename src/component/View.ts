import {Store, Dispatcher, Action} from '../core';

export class View{
    private action:Action;
    private store:Store;

    constructor(store:Store,action:Action){
        this.store = store;
        this.action = action;
        this.init();
    }

    public setMyState(str:string):void{
        this.action.changeState(str);
    }

    private getState():string{
        return this.store.getState();
    }

    init() {
        this.display();
    }

    display() {
        document.querySelector('#result').innerText = this.getState();
    }
}