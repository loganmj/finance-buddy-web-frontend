import { createContext } from "react";
import IBudgetContext from "./IBudgetContext";

const Budgetcontext = createContext<IBudgetContext | undefined>(undefined);
export default Budgetcontext;
