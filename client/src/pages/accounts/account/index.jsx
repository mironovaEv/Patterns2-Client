import { Card } from 'react-bootstrap'
import dateFormat from 'dateformat'

import { Link } from 'react-router-dom'

const Account = ({ number, balance, currency, dateOpened }) => {
  const date = new Date(dateOpened)
  return (
    <>
      <div className='col-12  col-md-6 '>
        <Card
          className=' m-1 p-1 text-decoration-none link-body-emphasis '
          as={Link}
          to={`/accounts/${number}`}
        >
          <div className='d-inline-flex justify-content-between'>
            <div className='mx-1 fs-4 fw-light'>№ {number}</div>
          </div>
          <div>
            <div className='d-inline-flex'>
              <div className='fs-4 fw-bold ms-1'>{balance}</div>
              <div className='fs-4 fw-bold mx-1'>{currency}</div>
            </div>
            <div className='d-flex align-items-end ms-1'>
              <div className='fw-light '>{dateFormat(date, 'mediumDate')}</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Account
