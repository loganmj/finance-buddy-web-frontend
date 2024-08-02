import { useState } from "react";
import useBudgetContext from "../Context/BudgetContextHook";
import ITransaction from "../Models/ITransaction";

const BudgetApp: React.FC = () => {
  // Use global context
  const { transactions, addTransaction, updateTransaction, deleteTransaction } =
    useBudgetContext();

  // Local context
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    amount: 0,
    transactionDate: "",
  });

  const handleAdd = () => {
    const item = { ...newTransaction, id: transactions.length + 1 };
    addTransaction(item);
    setNewTransaction({ name: "", amount: 0, transactionDate: "" });
  };

  return (
    <div>
      <h1>Budget Items</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newTransaction.name}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              amount: parseFloat(e.target.value),
            })
          }
        />
        <input
          type="date"
          value={newTransaction.transactionDate}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              transactionDate: e.target.value,
            })
          }
        />
        <button onClick={handleAdd}>Add Budget Item</button>
      </div>
      <ul>
        {transactions.map((item: ITransaction) => (
          <li key={item.id}>
            {item.name}: ${item.amount} on{" "}
            {new Date(item.transactionDate).toLocaleDateString()}
            <button onClick={() => deleteTransaction(item.id)}>Delete</button>
            <button
              onClick={() =>
                updateTransaction(item.id, { ...item, name: "Updated Name" })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetApp;
