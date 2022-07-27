import "./list.css";

function List({listTransactions, setListTransactions, setFilter}) {
  function handleFilter(type){
    const filter = listTransactions.filter((item) => {
      if(type === "todos"){
        return listTransactions
      }else{
        return item.type === type
      }
    })
    setFilter(filter)
  }

  return (
    <div className="geralList">
      <p>Resumo Financeiro</p>
      <div className="list">
        <button onClick={()=> handleFilter("todos")}>Todos</button>
        <button onClick={()=> handleFilter("Entrada")}>Entrada</button>
        <button onClick={()=> handleFilter("Saida")}>Despesa</button>
      </div>
    </div>
  );
}

export default List;
