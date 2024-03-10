import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './main.module.css'

const MainPage = () => {
  return (
    <div>
      <Container>
        <div className='d-flex flex-column col-2 mt-4 '>
          <Button as={Link} to='/accounts' className='m-2' variant='dark'>
            Мои счета
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default MainPage
