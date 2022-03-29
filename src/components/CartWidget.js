import { useContext } from 'react'
import { context } from './CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
	const result = useContext(context)
	const { totalItems, cart } = result
	return(
		<>
		{cart.length ? 
			<div className="widget">
				<FontAwesomeIcon icon={faCartShopping} />	
				<span>{totalItems}</span>
			</div>
			: '' }
		</>
	)
}

export default CartWidget