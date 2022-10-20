import { ADD, FLUSH } from "./constant";


class MokokoStore {
    public static instance: MokokoStore;
    private _mokokos: number;

    constructor() {
        this._mokokos = 0;
    }

    public reduce = (action: any, receiver: any) => {
        if(action) {
            switch(action){
                case ADD:
                    this._mokokos += 1;
                    break;
                case FLUSH:
                    this._mokokos = 0;
                    break;
            }
            receiver(this._mokokos);
        }
    }

    public static getInstance(): MokokoStore {
        if(!MokokoStore.instance) {
            MokokoStore.instance = new MokokoStore();
        }
        return MokokoStore.instance;
    }
}

export const store = MokokoStore.getInstance();
