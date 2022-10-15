/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import BaseStore from '@/stores/BaseStore';

function Observable() {
	return function <T extends { new (...args: any[]): BaseStore }>(OriginalClass: T) {
		return class extends OriginalClass {
			constructor(...args: any[]) {
				super();
			}
		};
	};
}

export default Observable;
