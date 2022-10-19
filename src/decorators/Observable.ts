/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseStore from '@/stores/BaseStore';

type ObservableClassType = new (...args: any[]) => BaseStore;

function Observable() {
	return function <T extends ObservableClassType>(OriginalClass: T): T {
		let instance: BaseStore;

		return class {
			constructor(...args: any[]) {
				if (instance) return instance;

				instance = new OriginalClass(...args);
				return instance;
			}
		} as T;
	};
}

export default Observable;
