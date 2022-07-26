import "./style.css";

function Form() {
  return (
    <form>
      <div className="divDescription">
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite aqui sua descrição..."
        />
      </div>
      <div className="divTipo-valor">
        <div className="valor">
          <label htmlFor="">Valor</label>
          <div className="inputValor">
            <input type="number" name="" id="" />
          </div>
        </div>
        <div className="tipo">
          <label htmlFor="">Tipo de valor</label>
          <select name="" id="">
            <option value="">Entrada</option>
            <option value="">Despesa</option>
          </select>
        </div>
      </div>
      <button>Inserir valor</button>
    </form>
  );
}

export default Form;
