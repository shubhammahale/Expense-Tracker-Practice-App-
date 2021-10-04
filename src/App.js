import { useState } from "react";
import Expenses from "./components//Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "1", title: "Grocery", amount: 200, date: new Date(2021, 2, 23) },
  { id: "2", title: "Shopping", amount: 2200, date: new Date(2021, 4, 3) },
  { id: "3", title: "Petrol", amount: 600, date: new Date(2021, 3, 20) },
  { id: "4", title: "Car oil", amount: 1000, date: new Date(2021, 0, 16) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
