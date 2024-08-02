import { useContext } from "react";
import Budgetcontext from "./BudgetContext";

const useBudgetContext = () => {
  const context = useContext(Budgetcontext);

  if (!context) {
    throw new Error(
      "useBudgetContext must be used within a BudgetContextProvider"
    );
  }

  return context;
};

export default useBudgetContext;
