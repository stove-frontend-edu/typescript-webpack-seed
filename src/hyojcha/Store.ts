import { Action } from "./Action";
import { CUSTOM_EVENT_TYPE_UPDATE_STATE } from "./const";

export class Store {
  private _state = 0;

  public update(action: Action) {
    switch (action) {
      case Action.PLUS:
        this._state += 1;
        break;
      case Action.MINUS:
        this._state -= 1;
        break;
    }

    const customEvent = new CustomEvent(CUSTOM_EVENT_TYPE_UPDATE_STATE);
    window.dispatchEvent(customEvent);
  }

  get state() {
    return this._state;
  }
}

export const store = new Store();
