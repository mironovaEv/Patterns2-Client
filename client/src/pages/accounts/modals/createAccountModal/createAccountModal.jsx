import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { CreateAccountThunkCreator } from '../../../../reducers/accountsReducer'

const CreateAccountModal = ({ show, onHide }) => {
  const { handleSubmit, register } = useForm({
    mode: 'onBlur',
  })
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(CreateAccountThunkCreator(data))
    console.log(data)
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Открытие счета</Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-3 py-0 d-inline-flex'>
        <div className='fs-3 fw-light'>Выберите валюту для счета </div>
        <div className='m-1 ms-3'>
          <Form.Select {...register('currencyCode')}>
            {/* {currency.map(value => (
              <option key={value}>{value}</option>
            ))} */}
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' type='button' onClick={onHide}>
          Отмена
        </Button>
        <Button variant='dark' type='button' onClick={handleSubmit(onSubmit)}>
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateAccountModal
