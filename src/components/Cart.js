import { useContext } from 'react'
import { context } from './CartContext'

const Cart = () => {
	
	const result = useContext(context)
	
	const { cart, removeItem, clear } = result

	
	
	const handleBorrar = (item) => {

		removeItem(item)
	}
	
	return(
		<>
			<div className="msg">
				<h4>Carrito</h4>
			</div>
			<div>
				{
					result.cart.map((item, index) => {
					
						
						return (
								<div key={index} className="cart-items">
									<div className="img-container">
										<img src={`/${item.disco.img}`} alt="" />
									</div>
									<div className="record-data">
										<h3>{item.disco.artist}</h3>
										<h4>{item.disco.record}</h4>
										<p>Precio unitario: ${item.disco.price}</p>
										<p>Cantidad: {item.count}</p>
										<p>Precio total: ${item.disco.price * item.count}</p>
									</div>
									<div className="record-remove">
										<button className="add-to-cart" onClick={()=>handleBorrar(item)}>Quitar item</button>
									</div>
									
									
								</div>
								
						)
					})
				}
			</div>
			<div className="clear">
				{cart.length ? <button className="add-to-cart" onClick={clear}>Borrar todo</button> : ''}
			</div>
			
		</>
	)
}

export default Cart
