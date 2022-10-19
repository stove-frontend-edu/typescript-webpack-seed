import { Action } from "./Action";
import { dispatcher } from "./Dispatcher";
import { getTextContent } from "./Util";

export class View {
  private _parent$: HTMLElement;
  private _id: string;
  private _$: HTMLElement;

  constructor(parentId: string, id: string, state: number) {
    this._parent$ = document.getElementById(parentId);
    this._id = id;
    this.addElement(state);
  }

  private addElement(state: number) {
    const $ = document.createElement("div");
    $.setAttribute("id", this._id);
    const htmlString = /*html*/ `<div style="width: 100px; display: inline-block;">${getTextContent(
      this._id,
      state
    )}</div><button class="btn-plus">+</button><button class="btn-minus">-</button>`;
    $.innerHTML = htmlString;

    // add event
    $.getElementsByClassName("btn-plus")[0].addEventListener("click", () =>
      dispatcher.dispatch(Action.PLUS)
    );
    $.getElementsByClassName("btn-minus")[0].addEventListener("click", () =>
      dispatcher.dispatch(Action.MINUS)
    );

    this._parent$.appendChild($);
    this._$ = $;
  }

  public update(state: number) {
    this._$.firstChild.textContent = getTextContent(this._id, state);
  }
}
