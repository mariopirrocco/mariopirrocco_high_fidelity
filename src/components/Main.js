import { Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify'

import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Profile from './Profile'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'

const Main = () => {

	return (
		<main>
			<Routes>
				<Route path="/" element={<ItemListContainer />} />				
				<Route path="/categoria/:id" element={<ItemListContainer />} />
				<Route path="/carrito" element={<Cart />} />
				<Route path="/item/:id" element={<ItemDetailContainer />} />				
        <Route path="/ingresar" element={<SignIn />} />	
        <Route path="/registrarse" element={<SignUp />} />
        <Route path="/usuario" element={<PrivateRoute />} >
          <Route path="/usuario" element={<Profile />} />	
        </Route>
        <Route path="/olvide-clave" element={<ForgotPassword />} />				
			</Routes>
		</main>
	)
}

export default Main 
