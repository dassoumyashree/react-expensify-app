import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         total: expensesTotal(state.expenses)
//     };
// };

export default ExpenseDashboardPage;
