import { removeExpense } from '../features/slice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SecondList = () => {
  const expenses = useSelector((state) => state.expenses.expense);
  const dispatch = useDispatch();

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <h1>{expense.name} - {expense.count}</h1>
          <button onClick={() => {
            dispatch(removeExpense(expense.id))
            }}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SecondList;
