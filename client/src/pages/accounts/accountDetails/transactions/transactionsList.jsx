import Transaction from './transaction'

const TransactionsList = ({ transactions }) => {
  console.log(transactions)
  return (
    <>
      {transactions.map(value => (
        <Transaction
          key={value.uniqueIdentifier}
          currency={value.currency}
          amount={value.amount}
          type={value.type}
          dateOpened={value.date}
        />
      ))}
    </>
  )
}

export default TransactionsList
