/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import BaseStore from '@/stores/BaseStore';

function Observer() {
	return function <T extends { new (...args: any[]): { render: () => void; stores?: Record<string, BaseStore> } }>(OriginalClass: T) {
		return class extends OriginalClass {
			constructor(...args: any[]) {
				super();

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
