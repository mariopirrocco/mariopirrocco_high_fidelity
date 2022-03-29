import { useContext } from 'react'
import { context } from './CartContext'

import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'



const ItemDetail = ({ disco, stock, initial, onAdd, goToCart }) => {	

	const result = useContext(context)

	const addItem = result.addItem;
	

	return (
		<div className="single-record">
			<div className="record-img">
				<img src={`/${disco.img}`} alt={`${disco.artist} - ${disco.record}`} />
			</div>
			<div className="record-data">				
				<h3>{disco.artist}</h3>
				<h4>{disco.record}</h4>
				<p><strong>Precio:</strong> U$S {disco.price}</p> 
				
				<hr />
				<p><strong>Año:</strong> {disco.released}</p>
				<p><strong>Estilo:</strong> {disco.genre}</p>
				<p><strong>Formato:</strong> {disco.format}</p>
				<p><strong>Canciones:</strong></p>
				<ul>
					{
						disco.tracklist.map((track, index) => {
							return <li key={index}>{track.title} </li>
						})
					}
				</ul>
				<div className="add-to-cart-control">


					{goToCart ? <Link to="/carrito">
												<button className="add-to-cart">Terminar compra</button>
											</Link> 
										: <ItemCount stock={stock} initial={initial} onAdd={onAdd} disco={disco} />}
				</div>
			</div>
		</div>
	)
}

export default ItemDetail

