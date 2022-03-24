import { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {
	
	// const resultado = useContext(contexto)
	// console.log(resultado)
	// const handleBorrar = () => {
	// 	console.log('borrar')
	// }
	
	return(
		<>
			<div className="msg">
				<h4>Carrito</h4>
				{/*<h4>Carrito {resultado.cart.length}</h4>*/}
				{/*{
					resultado.cart.map((item) => {
						return (
								<div key={item.id}>
									<h3>{item.artist}</h3>
									<h4>{item.titulo}</h4>
									<p>Precio: ${item.price}</p>
									<button onClick={handleBorrar}>Quitar item</button>
									<hr />
								</div>
								
						)
					})
				}*/}
			</div>
			
		</>
	)
}

export default Cart
