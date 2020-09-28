import React from 'react';
import ReactDOM from 'react-dom';
// import 'core-js';
// import 'regenerator-runtime/runtime';
import "@babel/polyfill";
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses, editExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
// import './playground/promises';

// Provider component allows us to provide the store to all of the components that make up our appl.
// so we do not manually need to pass the store around


const store = configureStore();
// console.log('testing');
// const exTwo = store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// console.log('exTwo', exTwo)
// const exThree = store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// console.log('exThree', exThree)
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// console.log('goat', store.getState());



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
// console.log(state)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

let hasRendered = false;
const renderApp = () => {
    console.log('rendered', hasRendered);
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));

// this cb runs when a user first visits the web page / when auth status changes
firebase.auth().onAuthStateChanged((user) => { 
    // runs the cb func. when the auth state has changed. user authenticated to unauthenticated and vice versa
    // this func. that keeps track of the state of auth.
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }   
        }); 
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


// dispatch login after the user is actually logged in & logout after the user has successfully logged out






