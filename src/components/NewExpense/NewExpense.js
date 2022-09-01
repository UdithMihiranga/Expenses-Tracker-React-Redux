import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isTyping, setIsTyping] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsTyping(false);
  };

  const startEditingHandler = () => {
    setIsTyping(true);
  };

  const stopEditingHandler = () => {
    setIsTyping(false);
  };

  return (
    <div className='new-expense'>
      {!isTyping && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isTyping && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
