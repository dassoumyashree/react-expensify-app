import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    // console.log('hello', props)
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {    
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}  
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push('/');
        }}>
            Remove
        </button>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
   
};

//react router renders this HOC. it passes the props through and allows us to add on some new ones
export default connect(mapStateToProps)(EditExpensePage);