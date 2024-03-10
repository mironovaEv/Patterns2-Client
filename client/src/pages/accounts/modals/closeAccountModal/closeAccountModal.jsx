import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { useForm } from 'react-hook-form'

const CloseAccountModal = ({ show, onHide, number }) => {
  const { handleSubmit } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = data => {
    console.log(data)
    onHide()
  }
  return (
    <Modal show={show} onHide={onHide} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Вы точно хотите закрыть счет № {number}?</Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-3 py-0'>
        <Form></Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' type='button' onClick={onHide}>
          Отмена
        </Button>
        <Button variant='dark' type='button' onClick={handleSubmit(onSubmit)}>
          Закрыть счет
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CloseAccountModal
