import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      
      <Navbar variant="dark" className="navbar">
        <Link to="/">
          <h3>High Fidelity Records</h3>  
        </Link>
        
          
        <div className="categories">
          <NavLink to="/categoria/vinilos" className="button-link">Vinilos</NavLink>
          <NavLink to="/categoria/cds" className="button-link">CDs</NavLink>
          <NavLink to="/categoria/cassettes" className="button-link">Cassettes</NavLink>
          <NavLink to="carrito" className="button-link">Carrito</NavLink>

          
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