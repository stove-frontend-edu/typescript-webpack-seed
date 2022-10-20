export class Store{

    private state:string = ''

    public getState():string{
        return this.state;
    }

    public changeState(str:string):void{
        this.state = str;
    }

}