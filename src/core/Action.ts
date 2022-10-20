import {Dispatcher} from './Dispatcher';
export class Action{
    private dispatcher:Dispatcher;
    //이벤트 변경, Dispatcher 하나로 묶기
    constructor(dispatcher:Dispatcher){
        this.dispatcher = dispatcher;
    }

    public changeState(str:string){
        this.dispatcher.dispatch(str);
    }
}