import "./totalMoney.css";

function TotalMoney(){
    return(
        <div className="geral">
            <div className="valorTotal">
                <h2>Valor Total:</h2>
                <p>R$:</p>
            </div>
            <div className="divP">
                <p>O valor se refere ao saldo</p>
            </div>
        </div>
    );
}

export default TotalMoney