import { Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify'

import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'

const Main = ({ nombre, apellido }) => {

	return (
		<main>
			<Routes>
				<Route path="/" element={<ItemListContainer />} />				
				<Route path="/categoria/:id" element={<ItemListContainer />} />
				<Route path="/carrito" element={<Cart />} />
				<Route path="/item/:id" element={<ItemDetailContainer />} />				
			</Routes>
		</main>
	)
}

export default Main 
