class BaseStore {
	private static baseStoreInstance: BaseStore | null = null;
	private _observer = {};

	private constructor() {
		// prevent to make instance
	}

	static getInstance() {
		if (!this.baseStoreInstance) {
			this.baseStoreInstance = new BaseStore();
		}
		return this.baseStoreInstance;
	}
}

export default BaseStore;
