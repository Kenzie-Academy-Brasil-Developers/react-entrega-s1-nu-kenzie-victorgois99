import { useState } from "react";
import "./style.css";

function Form({listTransactions, setListTransactions, setFilter}) {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [type, setType] = useState("Entrada")

  function handleSubmit(event){
    event.preventDefault()
    const id = Math.random().toString(16).slice(2)

    setListTransactions([...listTransactions, {
      id: id,
      description: description,
      value: type === "Entrada" ? value : - value,
      type: type
    }])
    setFilter([...listTransactions, {
      id: id,
      description: description,
      value: type === "Entrada" ? value : - value,
      type: type
    }])
  }

  return (
    <form onSubmit={event => handleSubmit(event)} >
      <div className="divDescription">
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite aqui sua descrição..."
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="divTipo-valor">
        <div className="valor">
          <label htmlFor="">Valor</label>
          <div className="inputValor">
            <input type="number" name="" id="" 
          onChange={(event) => setValue(event.target.value)}
          />
          </div>
        </div>
        <div className="tipo">
          <label htmlFor="">Tipo de valor</label>
          <select name="" id=""
          onChange={(event) => setType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
