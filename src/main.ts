/**
 * action
 * dispatcher
 * store
 * view controller
 * view
 */

import { active } from "d3";

/**
 * 단순 카운터
 * > +, -
 * > 중첩된 컴포넌트를 통해 flux 패턴의 장점 입증
 */

const Util = {
  getTextContent(id: string, state: number) {
    return `${id} : ${state}`;
  },
};

// View
class View {
  private _parent$: HTMLElement;
  private _id: string;
  private _$: HTMLElement;

  constructor(parent: HTMLElement, id: string) {
    this._parent$ = parent;
    this._id = id;
  }

  public addComponent(state: number) {
    const $ = document.createElement("div");
    $.setAttribute("id", this._id);
    $.innerHTML = /*html*/ `<div>${Util.getTextContent(this._id, state)}</div>`;
    this._parent$.appendChild($);
    this._$ = $;
  }

  public update(state: number) {
    this._$.firstChild.textContent = Util.getTextContent(this._id, state);
  }
}

// set component
const main$ = document.getElementsByTagName("main");
// if (!main$[0]) {
//   return;
// }
const state = 0;

// add components
const viewA = new View(main$[0], "viewA");
viewA.addComponent(state);

const viewB = new View(document.getElementById("viewA"), "viewB");
viewB.addComponent(state);

const viewC = new View(document.getElementById("viewB"), "viewC");
viewC.addComponent(state);

// Action
enum Action {
  PLUS = "PLUS",
  MINUS = "MINUS",
}

const dispatcher = () => {
  const storeList: Array<Store> = [];

  const registStore = (store: Store) => {
    storeList.push(store);
  };

  const dispatch = (action: Action) => {
    storeList.forEach((store) => {
      store.update(action);
    });
  };

  return { dispatch, registStore };
};

const CUSTOM_EVENT_TYPE_UPDATE_STATE = "CUSTOM_EVENT_TYPE_UPDATE_STATE";
const customEvent = new CustomEvent(CUSTOM_EVENT_TYPE_UPDATE_STATE);

class Store {
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
    window.dispatchEvent(customEvent);
  }

  get state() {
    return this._state;
  }
}
const storeA = new Store();

const { registStore, dispatch } = dispatcher();
registStore(storeA);

const btnPlus$ = document.getElementById("btn-plus");
const btnMinus$ = document.getElementById("btn-minus");

btnPlus$.addEventListener("click", () => dispatch(Action.PLUS));
btnMinus$.addEventListener("click", () => dispatch(Action.MINUS));

// view controller
const viewController = () => {
  const viewList: Array<View> = [];

  const registView = (view: View) => {
    viewList.push(view);
  };

  window.addEventListener(CUSTOM_EVENT_TYPE_UPDATE_STATE, () => {
    viewList.forEach((view) => {
      view.update(storeA.state);
    });
  });

  return { registView };
};

const { registView } = viewController();
registView(viewA);
registView(viewB);
registView(viewC);
