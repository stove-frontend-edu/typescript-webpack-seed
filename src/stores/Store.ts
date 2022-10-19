export class Store{
    #state = []
    #listeners =[]
    #reducer

    constructor(state, reducer) {
        this.#state = state
        this.#reducer = reducer
    }

    getState() {
        return this.#state
    }

    subscribe(func) {
        this.#listeners.push(func);
    }

    publish() {
        this.#listeners.forEach((func) => func());
    }

    async dispatch(actionKey, { ...payload } = {}) {
        this.#state = await this.#reducer(this.#state, actionKey, { ...payload });
        this.publish();
    }

}