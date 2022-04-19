import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to='/'>
          <h3>High Fidelity Records</h3>  
        </Link>
          
        <div className='categories'>
          <NavLink to='/categoria/vinilos' className='button-link'>Vinilos</NavLink>
          <NavLink to='/categoria/cds' className='button-link'>CDs</NavLink>
          <NavLink to='/categoria/cassettes' className='button-link'>Cassettes</NavLink>
          <NavLink to='carrito' className='button-link'>Carrito</NavLink>
        </div>
        
        <div className='user-area'>
          <CartWidget />
          <NavLink to='ingresar' className='btn-ingresar'>Ingresar</NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavBar