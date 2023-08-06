const redux = require('redux');

const counterReducer = (state = { counter: 0 }, actions) => {
    if (actions.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    else {
        return {
            counter: state.counter - 1
        }
    }
}


const store = redux.createStore(counterReducer);
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })

store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'decrement' })



console.log(store.getState());


const counterSubscriber = () => {
    const latesState = store.getState();
    console.log(latesState)
}

store.subscribe(counterSubscriber)