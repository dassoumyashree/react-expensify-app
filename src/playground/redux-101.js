import { createStore } from 'redux';

// Action generators - functions that return action obj
const incrementCount = ({ incrementBy = 1 } ={}) => {
    // console.log(incrementBy)
    return { 
    type: 'INCREMENT',
    incrementBy
}};

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


//Reducers
//  1. pure functions
//  2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET': 
            return {
                count: 0
            };
        default:
            return state;
    }
};

//store - Redux state container -- tracks our changing data over time
const store = createStore(countReducer);


//watch for changes to the redux store state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));




//Actions -an abj that get sent to the store
//  change the store over time by dispatching various actions
 //allows us to send off an action obj


// array destructuring

// const address = [];
// const [, , state = 'New York'] = address;
// console.log(state);