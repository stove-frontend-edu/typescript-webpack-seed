import { CUSTOM_EVENT_TYPE_UPDATE_STATE } from "./const";
import { store } from "./Store";
import { View } from "./View";

export const ViewController = () => {
  const viewList: Array<View> = [];

  const registView = (view: View) => {
    viewList.push(view);
  };

  window.addEventListener(CUSTOM_EVENT_TYPE_UPDATE_STATE, () => {
    viewList.forEach((view) => {
      view.update(store.state);
    });
  });

  return { registView };
};

export const viewController = ViewController();
