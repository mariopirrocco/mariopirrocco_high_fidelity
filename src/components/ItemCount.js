import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

	const [ counter, setCounter ] = useState(initial)

	const addItem = () => {
		if(counter < stock) {
			setCounter(counter + 1)
		}
	}

	const removeItem = () => {
		if(counter > initial) {
			setCounter(counter - 1)
		}
	}
	return (
		<>
			<div className="counter">{ counter }</div>
			<div className="control">
				<button className="items-control" onClick = {addItem}> + </button>
				<button className="items-control" onClick = {removeItem}> - </button>	
			</div>
			
			<button className="add-to-cart" onClick={()=> onAdd(counter)}>Agregar al carrito</button>
		</>
	)
}

export default ItemCount