import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);

  const onChangeBudgetHandler = (e) => {

    const enteredValue = Number(e.target.value);

    if(!Number.isInteger(enteredValue)){
        alert('Please enter an integer number.');
        return;
    }

    if (enteredValue > 20000) {
      alert("The value cannot exceed £20,000");
      return;
    }

    if (budget < totalExpenses) {
      alert("You cannot reduce the budget below the spending");
      return;
    }

    dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
      });
    
  };

  return (
    <div className='alert alert-secondary'
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label htmlFor="budget"> Budget:</label>
        <span>{currency}</span>

      <input
        required='required'
        type='number'
        id='budget'
        step='10'
        value={budget}
        style={{ marginLeft: '2rem', size: 10 }}
        onChange={onChangeBudgetHandler}
      />

    </div>
  );
};

export default Budget;
