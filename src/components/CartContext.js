import { createContext, useState } from 'react'
export const context = createContext()
const { Provider } = context

const CartContextProvider = (props) => {

	const [ cart, setCart ] = useState([])	
	const [ total, setTotal ] = useState(0)
	const [ totalItems, setTotalItems ] = useState(0)

	const removeItem = (record) => {    
    if (isInCart(record)) {    		
      const cartAux = cart.filter(item => item !== record )
      setCart(cartAux)
      getTotal(cartAux)
      getTotalItems(cartAux)
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

    getTotal(cartAux)
    getTotalItems(cartAux)
	}
	
	const clear = () => {
		setCart([]) 
		setTotal(0)
	}

	const getTotal = (cartAux) => {
		let total=0
		for(let i of cartAux) {
			total += i.count * i.disco.price
		}
		setTotal(total);
	}

	const getTotalItems = (cartAux) => {
		let totalItems=0
		for(let i of cartAux) {
			totalItems += i.count
		}
		setTotalItems(totalItems);
	}
		
	const isInCart = (disco) => {
		return cart && cart.some(item => item === disco)
	}
 	
	const contextValue = {		
		addItem,
    removeItem,
    clear,
    cart,
    total,
    totalItems
	}
	


	return(
		<Provider value={contextValue} >
			{props.children}
		</Provider>
	)
}

export default CartContextProvider

