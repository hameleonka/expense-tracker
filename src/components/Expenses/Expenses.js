import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Total from '../Total/Total';

import './Expenses.css';

function Expenses(props) {
  const expensesFilterChangeHandler = selectedYear => {
    props.onChangeFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  });

  const totalAmount = filteredExpenses.reduce(
    (previousExpense, currentExpense) => {
      return previousExpense + (+currentExpense.amount)
    },
    0
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={props.filteredYear} onChangeFilter={expensesFilterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDeleteExpense={props.onDeleteExpense} />
      <Total totalAmount={totalAmount} />
    </Card>
  )
}
export default Expenses;