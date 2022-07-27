import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import logoHeader from "./assets/img/NuKenzie-black.svg";
import logoLogin from "./assets/img/NuKenzie-white.svg";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import SemLancamento from "./components/SemLancamento";
import Card from "./components/Card";
import image from "./assets/img/image.svg"

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterList, setFilter] = useState([]);
  const [logged, setLogged] = useState(false);
  return (
    <>
      {logged ? (
        <div className="App">
          <header className="App-header">
            <div>
              <img src={logoHeader} alt="" />
              <button onClick={() => setLogged(!logged)}>Inicio</button>
            </div>
          </header>
          <div className="divPrincipal">
            <div className="divMainAside">
              <main>
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFilter={setFilter}
                />
                {listTransactions.length > 0 && (
                  <TotalMoney listTransactions={listTransactions} />
                )}
              </main>
              <aside>
                <List
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFilter={setFilter}
                />
                {listTransactions.length === 0 ? (
                  <SemLancamento />
                ) : (
                  filterList.map((transaction, index) => (
                    <Card
                      transaction={transaction}
                      key={index}
                      listTransactions={listTransactions}
                      setListTransactions={setListTransactions}
                      setFilter={setFilter}
                    ></Card>
                  ))
                )}
              </aside>
            </div>
          </div>
        </div>
      ) : (
        <div className="loginGeral">
          <div className="login">
            <div className="nu">
              <img src={logoLogin} alt="" />
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rapida e segura</p>
              <button onClick={() => setLogged(!logged)}>Iniciar</button>
            </div>
              <div className="divImg">
                <img src={image} alt="" />
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
