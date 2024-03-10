import { Card } from 'react-bootstrap'

const Transaction = ({ currency, amount, type, dateOpened }) => {
  const date = new Date(dateOpened)
  let color = ''
  let operator = ''
  switch (type) {
    case 'Deposit':
      color = 'success'
      operator = '+'
      break
    case 'Withdraw':
      color = 'danger'
      operator = '-'
      break
    default:
      color = 'dark'
      operator = ''
      break
  }
  return (
    <div>
      <Card className='m-1'>
        <div className='d-inline-flex justify-content-between mx-2 m-1'>
          <div className='fs-4 fw-light'>Дата операции: {date}</div>
          <div className={`text-${color} fs-4 fw-bold`}>
            {operator} {amount} {currency}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Transaction
