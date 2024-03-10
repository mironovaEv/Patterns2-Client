import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import icon from './icon2.svg'

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='p-0 d-inline-flex'>
            <img
              alt=''
              src={icon}
              width='40'
              height='40'
              className='d-inline-block align-top'
            />{' '}
            <div className='fs-3 mx-3'>КиберБанк</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
