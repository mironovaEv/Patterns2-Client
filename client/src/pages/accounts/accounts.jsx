import { Button, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

import Account from './account'
import CreateAccountModal from './modals/createAccountModal/createAccountModal'

const Accounts = ({ accounts }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <div className='col-12 col-lg-10 mt-3'>
            <div className='d-inline-flex justify-content-between col-12'>
              <div className='fs-2 m-2 fw-bold '>Мои счета</div>
              <div className='align-self-center m-2'>
                <Button variant='dark' onClick={() => setShow(true)}>
                  + Открыть новый счет
                </Button>
              </div>
            </div>
            <div className='d-flex justify-content-start flex-wrap'>
              {accounts.map(value => (
                <Account
                  key={value.accountNumber}
                  number={value.accountNumber}
                  balance={value.balance}
                  currency={value.currency}
                  dateOpened={value.dateOpened}
                />
              ))}
            </div>
          </div>
        </Row>
      </Container>
      <CreateAccountModal show={show} onHide={handleClose} />
    </div>
  )
}
export default Accounts
