import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses  from '../selectors/expenses';

//regular unconnected comp. ... connecting this to redux store its reactive
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
            props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense}/>
            ))
            )
        }      
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        // filters: state.filters
    };
};

//connecting react comp to redux store
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;