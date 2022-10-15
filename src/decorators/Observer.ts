/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseStore from '@/stores/BaseStore';

export interface ObserverClassType {
	render: () => void;
	stores?: Record<string, BaseStore>;
}

function Observer() {
	return function <T extends new (...args: any[]) => ObserverClassType>(OriginalClass: T) {
		return class extends OriginalClass implements ObserverClassType {
			constructor(...args: any[]) {
				super(...args);

				if (this.stores) {
					const storeKeys = Object.keys(this.stores);

					storeKeys.forEach((storeKey) => {
						const curStore = this.stores![storeKey];
						curStore.subscribe(this);
					});
				}

				this.render();
			}
		};
	};
}

export default Observer;
