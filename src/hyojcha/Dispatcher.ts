import { Action } from "./Action";
import { Store } from "./Store";

const Dispatcher = () => {
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

export const dispatcher = Dispatcher();
