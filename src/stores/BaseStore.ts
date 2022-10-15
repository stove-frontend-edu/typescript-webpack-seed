/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObserverClassType } from '@/decorators/Observer';

abstract class BaseStore {
	protected observer = new Set<ObserverClassType>();

	subscribe(context: ObserverClassType) {
		this.observer.add(context);
	}

	update() {
		setTimeout(() => {
			this.observer.forEach((component) => component.render());
		}, 0);
	}
}

export default BaseStore;
