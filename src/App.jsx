import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import logoHeader from "./assets/NuKenzie-black.svg";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logoHeader} alt="" />
          <button>Inicio</button>
        </div>
      </header>
      <main>
        <Form />
        <TotalMoney />
      </main>
        <aside>
        {/* <List /> */}
        </aside>
    </div>
  );
}

export default App;
