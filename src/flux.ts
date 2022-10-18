export interface Action<T = any, P extends Record<string, unknown> = {}> {
	type: T;
	payload: P;
}

export interface AnyAction extends Action {
	[extraProps: string]: any;
}

export interface Reducer<S = any, A extends Action = AnyAction> {
	(state: S | undefined, action: A): S;
}

export interface Dispatch<A extends Action = AnyAction> {
	<T extends A>(action: T): void;
}

export interface Listener {
	(): void;
}

export interface Subscribe {
	(listener: Listener): void;
}

export interface Store<S = any, A extends Action = AnyAction> {
	dispatch: Dispatch<A>;

	getState(): S;

	subscribe(listener: () => void): void;
}

export function createStore<S, A extends Action>(
	reducer: Reducer<S, A>,
): Store<S, A> {
	let state: S;
	const listeners: Listener[] = [];

	const publish = () => {
		listeners.forEach((listener) => {
			listener();
		});
	};

	const dispatch: Dispatch<A> = (action) => {
		state = reducer(state, action);
		publish();
	};

	const subscribe: Subscribe = (listener) => {
		listeners.push(listener);
	};

	const getState = () => ({...state});

	return {
		dispatch,
		getState,
		subscribe,
	};
}

export function actionCreator<T = any, P extends Record<string, unknown> = {}>(
	type: T,
	payload?: P,
): Action<T, P> {
	return {
		type,
		payload: payload ?? ({} as P),
	};
}
