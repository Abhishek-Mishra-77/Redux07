const redux = require('redux');

const counterReducer = (state = { counter: 0 }, actions) => {
    if (actions.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (actions.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    if (actions.type === 'INCREMENTBY2') {
        return {
            counter: state.counter + 2
        };
    }

    if (actions.type === 'DECREMENTBY2') {
        return {
            counter: state.counter - 2
        }
    }


    return state;
}


const store = redux.createStore(counterReducer);
store.dispatch({ type: 'INCREMENTBY2' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'DECREMENTBY2' })
store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'decrement' })

console.log(store.getState());


const counterSubscriber = () => {
    const latesState = store.getState();
    console.log(latesState)
}

store.subscribe(counterSubscriber)