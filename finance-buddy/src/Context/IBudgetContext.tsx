import ITransaction from "../Models/ITransaction";

interface IBudgetContext {
  transactions: ITransaction[];
  addTransaction: (item: ITransaction) => void;
  updateTransaction: (id: number, item: ITransaction) => void;
  deleteTransaction: (id: number) => void;
}

export default IBudgetContext;
