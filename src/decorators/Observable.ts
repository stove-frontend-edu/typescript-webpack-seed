/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import BaseStore from '@/stores/BaseStore';

function Observable() {
	return function <T extends { new (...args: any[]): BaseStore }>(OriginalClass: T): T {
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
