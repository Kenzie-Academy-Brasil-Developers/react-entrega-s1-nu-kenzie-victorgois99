import "./list.css";

function List() {
  return (
    <div className="geral">
      <p>Resumo Financeiro</p>
      <div className="list">
        <ul>
          <li>Todos</li>
          <li>Entradas</li>
          <li>Despesas</li>
        </ul>
      </div>
    </div>
  );
}

export default List;
