import { createContext } from "react";
import IBudgetContext from "./IBudgetContext";

// Implements the IBudgetContext interface
const Budgetcontext = createContext<IBudgetContext | undefined>(undefined);
export default Budgetcontext;
