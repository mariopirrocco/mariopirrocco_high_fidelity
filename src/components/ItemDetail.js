import { useContext } from 'react'
import { context } from './CartContext'

import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ disco, stock, initial, onAdd, goToCart }) => {	
	const result = useContext(context)
	const addItem = result.addItem

	return (
		<div className="single-record">
			<div className="record-img">
				<img src={`/${disco[0].img}`} alt={`${disco[0].artist} - ${disco[0].record}`} />
			</div>
			<div className="record-data">				
				<h3>{disco[0].artist}</h3>
				<h4>{disco[0].record}</h4>
				<p><strong>Precio:</strong> U$S {disco[0].price}</p> 
				
				<hr />
				<p><strong>Año:</strong> {disco[0].released}</p>
				<p><strong>Estilo:</strong> {disco[0].genre}</p>
				<p><strong>Formato:</strong> {disco[0].format}</p>
				<p><strong>Canciones:</strong></p>
				<ul>
					{
						disco[0].tracklist.map((track, index) => {
							return <li key={index}>{track} </li>
						})
					}
				</ul>
				<div className="add-to-cart-control">
					{goToCart ? <Link to="/carrito">
												<button className="add-to-cart">Terminar compra</button>
											</Link> 
										: <ItemCount stock={stock} initial={initial} onAdd={onAdd} disco={disco[0]} />}
				</div>
			</div>
		</div>
	)
}

export default ItemDetail

