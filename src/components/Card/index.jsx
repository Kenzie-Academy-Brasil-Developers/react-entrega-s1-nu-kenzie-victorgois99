import "./card.css";
import lixoCard from "../../assets/img/lixo.svg"

export default function Card({
  transaction,
  listTransactions,
  setListTransactions,
  setFilter,
}) {
  function handleDelete() {
    const newList = listTransactions.filter(
      (item) => item.id !== transaction.id
    );
    setListTransactions(newList);
    setFilter(newList);
  }

  return (
      <div className="card">
        <div className="text">
          <p className="description">{transaction.description}</p>
          <p className="type">{transaction.type}</p>
        </div>
          <div className="value">
            <p>R$: {transaction.value},00</p>
          </div>
          <div className="button">
            <button onClick={() => handleDelete()}>
              <img src={lixoCard} alt="" />
            </button>
          </div>
      </div>
  );
}
