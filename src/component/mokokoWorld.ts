import { Dispatcher} from './dispatcher';
import { ADD, FLUSH } from './constant';

export class MokokoWorld {
    private _mokokos: number;
    private _mokokoImages: HTMLElement;

    constructor() {
        this._mokokos = 0;
        this._mokokoImages = document.getElementById("mokoko-world");
        document.getElementById("add-mokoko-button")
            .addEventListener(
                'click', () => {
                    console.log("add button clicked")
                    dispatchEvent(
                        new CustomEvent(
                            Dispatcher.DISPATCH_EVENT,
                            { detail: { action: ADD, receiver: this.onUpdateMokoko } }
                        )
                    )
                }
            );
        document.getElementById("flush-mokoko-button")
            .addEventListener(
                'click', () => {
                    console.log("flush button clicked");
                    dispatchEvent(
                        new CustomEvent(
                            Dispatcher.DISPATCH_EVENT,
                            { detail: { action: FLUSH, receiver: this.onUpdateMokoko } }
                        )
                    )
                }
            );
    }

    onUpdateMokoko = (mokokos: number) => {
        if(this._mokokos < mokokos){
            for(let i = this._mokokos; i<mokokos; i++) {
                const mokokoImage = document.createElement("img") as HTMLImageElement;
                mokokoImage.src = "https://cdn-lostark.game.onstove.com/2021/event/210324_landing/images/m/mokoko_01.gif";
                this._mokokoImages.appendChild(mokokoImage);
            }
        }
        else {
            this._mokokoImages.textContent = '';
        }
        this._mokokos = mokokos;
    }
}
