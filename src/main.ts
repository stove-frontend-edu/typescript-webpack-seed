import './style.css';
import {Action, actionCreator, createStore, Reducer} from './flux';

interface CounterState {
	amount: number;
	count: number;
}

const COUNTER_ACTION_TYPES = {
	INIT: 'INIT',
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	SET_AMOUNT: 'SET_AMOUNT',
} as const;

type CounterActions =
	| Action<typeof COUNTER_ACTION_TYPES.INIT>
	| Action<typeof COUNTER_ACTION_TYPES.INCREMENT>
	| Action<typeof COUNTER_ACTION_TYPES.DECREMENT>
	| Action<typeof COUNTER_ACTION_TYPES.SET_AMOUNT, {amount: number}>;

const counterReducer: Reducer<CounterState, CounterActions> = (
	state = {count: 0, amount: 1},
	action,
) => {
	switch (action.type) {
		case COUNTER_ACTION_TYPES.INCREMENT:
			return {
				...state,
				count: state.count + state.amount,
			};
		case COUNTER_ACTION_TYPES.DECREMENT:
			return {
				...state,
				count: state.count - state.amount,
			};
		case COUNTER_ACTION_TYPES.SET_AMOUNT:
			return {
				...state,
				amount: action.payload.amount,
			};
		default:
			return {
				...state,
			};
	}
};

const counterStore = createStore(counterReducer);
const $app = document.querySelector<HTMLDivElement>('#app')!;

const renderApp = ($root: HTMLElement, state: CounterState) => {
	$root.innerHTML = /* html */ `
    <h2 class="m-24">Flux Counter</h2>
    <h3>count is ${state.count}</h3>

    <div class="m-12">
      <button id="decrement" type="button">- ${state.amount}</button>
      <button id="increment" type="button">+ ${state.amount}</button>
    </div>

    <div class="flex flex-row">
      <label for="amount">
        <h4>Set amount</h4>
      </label>
      <input type="number" name="amount" placeholder="Set amount" value="${state.amount}">
    </div>
  `;

	const $setAmount = $root.querySelector<HTMLInputElement>(
		'input[name="amount"]',
	)!;

	$setAmount.addEventListener('change', (event) => {
		if (event.target instanceof HTMLInputElement) {
			counterStore.dispatch(
				actionCreator(COUNTER_ACTION_TYPES.SET_AMOUNT, {
					amount: event.target.valueAsNumber,
				}),
			);
		}
	});

	const $increment = $root.querySelector<HTMLButtonElement>('#increment')!;

	$increment.addEventListener('click', () =>
		counterStore.dispatch(actionCreator(COUNTER_ACTION_TYPES.INCREMENT)),
	);

	const $decrement = $root.querySelector<HTMLButtonElement>('#decrement')!;

	$decrement.addEventListener('click', () =>
		counterStore.dispatch(actionCreator(COUNTER_ACTION_TYPES.DECREMENT)),
	);
};

counterStore.subscribe(() => renderApp($app, counterStore.getState()));

counterStore.dispatch(actionCreator(COUNTER_ACTION_TYPES.INIT));
