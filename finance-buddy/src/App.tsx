import "./App.css";
import BudgetContextProvider from "./Context/BudgetContextProvider";
import BudgetApp from "./Components/BudgetApp";

function App() {
  return (
    <BudgetContextProvider>
      <BudgetApp />
    </BudgetContextProvider>
  );
}

export default App;
