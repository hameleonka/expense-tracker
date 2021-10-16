import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Mexico Vacation',
    amount: 50000,
    date: new Date(2022, 3, 14),
  },
  { id: 'e2', title: 'New Phone', amount: 2000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Kitchen reno',
    amount: 15000,
    date: new Date(2021, 6, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 4, 12),
  },
  {
    id: 'e5',
    title: 'New House',
    amount: 500000,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e6',
    title: 'New car',
    amount: 35000,
    date: new Date(2020, 1, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2021');

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setFilteredYear(expense.date.getFullYear().toString());
  };

  const deleteExpenseHandler = (expenseTitle) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(expense => {
        return expense.title !== expenseTitle;
      });
    });
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        onDeleteExpense={deleteExpenseHandler}
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler} />
    </div>
  );
}

export default App;
