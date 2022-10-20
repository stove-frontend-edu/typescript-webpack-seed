import { Store } from './Store';

//Pattern 안에서는 Observer의 개념으로 데이터가 변경되면 모든 Store에 변경을 통보하지만 여기서는 단일 Store만 사용
export class Dispatcher{
    private store:Store;
    constructor(store:Store){
        this.store = store;
    }
    public dispatch(str:string):void{
        this.store.changeState(str);
    }
}