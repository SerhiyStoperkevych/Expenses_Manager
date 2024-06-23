import { addExpense, clearExpense } from '../features/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const MainList = () => {
  const [count, setCount] = useState('');
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const countNumber = parseFloat(count);
    if (isNaN(countNumber) || countNumber <= 0) {
        alert("Please enter a valid number");
        return;
      }
    setTotal(total + countNumber);
    dispatch(addExpense({ id: Date.now(), name, count: countNumber }));
    setCount('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Total Expenses: {total}</h1>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type='text'
        name='count'
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Expenses"
      />
      <button type="submit">
        Add
      </button>
      <button type="button" onClick={() => {
        dispatch(clearExpense());
        setTotal(0);
      }}>
        Clear
      </button>
    </form>
  );
};

export default MainList;
