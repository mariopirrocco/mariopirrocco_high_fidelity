import { createContext, useState } from 'react'

export const context = createContext()

const { Provider } = context

const CartContextProvider = (props) => {

	const [ cart, setCart ] = useState([])
	
	const [ total, setTotal ] = useState(0)

	const removeItem = (record) => {
		console.log(record)
    
    if (isInCart(record)) {
    		
      const cartAux = cart.filter(item => item !== record )
      setCart(cartAux)
    } else {
    	console.log('not found')
    }
	}
	
	const addItem = (disco, count) => {

		let cartProduct = { disco, count }
    let cartAux = []
    
    if (isInCart(disco)) {
      cartProduct = cart.find(item => item.disco === disco)
      cartProduct.count = cartProduct.count + count
      cartAux = [...cart]
    } else {
      cartAux = [cartProduct, ...cart]
    }
    setCart(cartAux)

	}
	
	const clear = () => {
		setCart = []
	}
		
	const isInCart = (disco) => {
		return cart && cart.some(item => item === disco)
	}
 	
	const contextValue = {		
		addItem,
    removeItem,
    clear,
    cart
	}
	
	return(
		<Provider value={contextValue} >
			{props.children}
		</Provider>
	)
}

export default CartContextProvider

