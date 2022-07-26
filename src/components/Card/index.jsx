export default function Card({transaction, listTransactions, setListTransactions, setFilter}){
    
    function handleDelete(){
    const newList = listTransactions.filter((item) => item.id !== transaction.id)
    setListTransactions(newList)
    setFilter(newList)
    }

    return(
        <>
        <p>{transaction.description}</p>
        <p>{transaction.type}</p>
        <p>{transaction.value}</p>
        <button onClick={() => handleDelete()}>Lixo</button>
        </>
    );
}