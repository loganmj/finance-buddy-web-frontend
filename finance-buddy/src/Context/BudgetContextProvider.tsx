import { useEffect, useState } from "react";
import IBudgetContextProvider from "./IBudgetContextProvider";
import ITransaction from "../Models/ITransaction";
import BudgetContext from "./BudgetContext";

const BudgetContextProvider: React.FC<IBudgetContextProvider> = ({
  children,
}) => {
  const BUDGET_APP_URL = "https://localhost:7260/Budget";
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  // Fetch transactions at start
  useEffect(() => {
    fetch(BUDGET_APP_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  // Add a transaction
  const addTransaction = (item: ITransaction) => {
    fetch(BUDGET_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]))
      .catch((error) => console.error("Error adding budget item:", error));
  };

  // Updates a transaction
  const updateTransaction = (id: number, updatedItem: ITransaction) => {
    fetch(BUDGET_APP_URL + "/${id}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then(() => {
        setTransactions(
          transactions.map((item) => (item.id === id ? updatedItem : item))
        );
      })
      .catch((error) => console.error("Error updating transaction:", error));
  };

  // Deletes a transaction
  const deleteTransaction = (id: number) => {
    fetch(BUDGET_APP_URL + "/${id}", {
      method: "DELETE",
    })
      .then(() => {
        setTransactions(transactions.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting transaction:", error));
  };

  return (
    <BudgetContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
