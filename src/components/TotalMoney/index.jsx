import "./totalMoney.css";

function TotalMoney({listTransactions}){
    return(
        <div className="geralValor">
            <div className="valorTotal">
                <h2>Valor Total:</h2>
                <p>R$: {listTransactions.reduce((acc, cv) => acc + Number (cv.value),0)},00</p>
            </div>
            <div className="divP">
                <p>O valor se refere ao saldo</p>
            </div>
        </div>
    );
}

export default TotalMoney