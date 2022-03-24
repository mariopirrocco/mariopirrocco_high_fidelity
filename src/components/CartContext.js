import { createContext, useState } from 'react'
export const contexto = createContext()
const { Provider } = contexto

const CartContextProvider = (props) => {

	const [ cartContent, setCartContent ] = useState([])
	
	const [ total, setTotal ] = useState(0)
s
	const removeItem = (id) => {}
	
	const addItem = (id, value) => {
		isInCart(id)
		
		if(isInCart(id)) {
			setCartContent(cartContent[isInCart(id)].quantity = 
		} else {
			setCartContent ([...cartContent, {...prod, qty}]) // ver
			setTotal(total + prod.price) 			// ver
		}
	}
	
	const clear = () => {
		setCartContent = []
	}
	
	
	
	const isInCart = (id) => {
		// buscar por id y devuelve true or false si está en el array
		cartContent.findIndex((item) => {
			return item.id === id
		})
	}
 	
	const contextValue = {		
		total: total,
		cartContent: cartContent,
		removeItem: removeItem,
		addItem: addItem,
		clear: clear
	}
	
	return(

		<Provider value={contextValue} >
			{props.children}
		</Provider>
	)
}

export default CartContextProvider

