import { Button, Container, Row, InputGroup, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import CloseAccountModal from '../modals/closeAccountModal/closeAccountModal'
import TransactionsList from './transactions/transactionsList'
import {
  DepositThunkCreator,
  WithdrawThunkCreator,
} from '../../../reducers/accountDetailsReducer'

const AccountDetails = ({ details }) => {
  console.log(details)
  const { handleSubmit, register, reset } = useForm({
    mode: 'onBlur',
  })
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const onSubmitDeposit = amount => {
    console.log(amount.amountDeposit)
    reset()
    dispatch(DepositThunkCreator(details.accountNumber, amount.amountDeposit))
  }
  const onSubmitWithdraw = amount => {
    console.log(amount.amountWithdraw)
    reset()
    dispatch(WithdrawThunkCreator(details.accountNumber, amount.amountWithdraw))
  }
  const date = new Date(details.dateOpened)
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <div className='col-8 mt-3'>
            <div className='d-inline-flex justify-content-between col-12'>
              <div className='fs-2 fw-light'>
                Данные по счету № {details.accountNumber}
              </div>
              <div className='align-self-center my-2'>
                <Button variant='dark' onClick={() => setShow(true)}>
                  Закрыть счет
                </Button>
              </div>
            </div>
            <div className=' fs-2 fw-semibold d-flex'>
              <div className='d-inline-flex'>
                <div className='fs-2 fw-light'>Баланс: </div>
                <div className='fs-2 fw-light ms-1'>{details.balance}</div>
                <div className='fs-2 fw-light mx-1'>{details.currency}</div>
              </div>
            </div>
            <div className='fs-3 fw-light'>Дата открытия: {date}</div>
            <div className='  mt-3'>
              <form className='row'>
                <div className='col-md-6 col-12 mb-2 mb-md-0'>
                  <InputGroup>
                    <Form.Control
                      {...register('amountDeposit')}
                      placeholder='Введите сумму'
                      aria-label='Введите сумму'
                      id='input-deposit'
                    />
                    <Button
                      variant='outline-dark'
                      id='button-deposit'
                      type='submit'
                      onClick={handleSubmit(onSubmitDeposit)}
                    >
                      Пополнить счет
                    </Button>
                  </InputGroup>
                </div>
                <div className='col-md-6 col-12'>
                  <InputGroup>
                    <Form.Control
                      {...register('amountWithdraw')}
                      placeholder='Введите сумму'
                      aria-label='Введите сумму'
                      id='input-withdraw'
                    />
                    <Button
                      variant='outline-dark'
                      id='button-withdraw'
                      type='submit'
                      onClick={handleSubmit(onSubmitWithdraw)}
                    >
                      Снять со счета
                    </Button>
                  </InputGroup>
                </div>
              </form>
            </div>
          </div>
          <div className='col-8 mt-3'>
            <div className='fs-2 fw-light mb-2'>История оперций по счету:</div>
            <div>
              <TransactionsList transactions={details.transactions} />
            </div>
          </div>
        </Row>
      </Container>
      <CloseAccountModal
        show={show}
        onHide={handleClose}
        number={details.accountNumber}
      />
    </>
  )
}

export default AccountDetails
