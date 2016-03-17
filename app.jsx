
const counter = (state = 0, action) => {

	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

// rwrite createStore

// const createStore = (reducer) => {
// 	let state;
// 	let listeners = [];

// 	const getState = () => state;

// 	const dispatch = (action) =. {
// 		state = reducer(state, action);
// 		listeners.forEach(listener => listener());
// 	}

// 	const subscribe = (listener) => {
// 		listeners.push(listener);
// 		return () => {
// 			listeners = listeners.filter(l => l !== listener);
// 		};
// 	}

// 	dispatch({});

// 	return { getSTate, dispatch, subscribe }
// }

const { createStore } = Redux;
const store = createStore(counter);

const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() =>
				store.dispatch({
					type: "INCREMENT"
				})
			}
			onDecrement={() =>
				store.dispatch({
					type: "DECREMENT"
				})
			} />,
		document.getElementById('root')
	);
}

store.subscribe(render);
render;