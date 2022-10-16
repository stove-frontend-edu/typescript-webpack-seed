import { Action } from "./Action";
import { INIT_STATE, ID } from "./const";
import { dispatcher } from "./Dispatcher";
import { store } from "./Store";
import { View } from "./View";
import { viewController } from "./ViewController";

const { MAIN, VIEW_A, VIEW_B, VIEW_C, BUTTON_PLUS, BUTTON_MINUS } = ID;

// register store
dispatcher.registStore(store);

const btnPlus$ = document.getElementById(BUTTON_PLUS);
const btnMinus$ = document.getElementById(BUTTON_MINUS);
btnPlus$.addEventListener("click", () => dispatcher.dispatch(Action.PLUS));
btnMinus$.addEventListener("click", () => dispatcher.dispatch(Action.MINUS));

// add components
const viewA = new View(MAIN, VIEW_A, INIT_STATE);
const viewB = new View(VIEW_A, VIEW_B, INIT_STATE);
const viewC = new View(VIEW_B, VIEW_C, INIT_STATE);

// register view
viewController.registView(viewA);
viewController.registView(viewB);
viewController.registView(viewC);
