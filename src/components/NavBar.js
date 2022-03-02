import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      
      <Navbar variant="dark" className="navbar">
        
        <h3>High Fidelity Records</h3>
          
        <div className="categogries">
          <Button variant="primary">Vinilos</Button>
          <Button variant="primary">CDs</Button>
          <Button variant="primary">Cassettes</Button>
        </div>
        
        <div className="user-area">
          <CartWidget />
          <Button variant="secondary">Ingresar</Button>
        </div>
      </Navbar>
    </>
  )
}

export default NavBar