import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd, disco }) => {

	const [ counter, setCounter ] = useState(initial)
	
	const addRecord = () => {
		if(counter < stock) {
			setCounter(counter + 1)
		}
	}

	const removeRecord = () => {
		if(counter > initial) {
			setCounter(counter - 1)
		}
	}
	return (
		<>
			<div className="counter">{ counter }</div>
			<div className="control">
				<button className="items-control" onClick = { addRecord }> + </button>
				<button className="items-control" onClick = { removeRecord }> - </button>	
			</div>
			
			<button className="add-to-cart" onClick={ ()=> onAdd(disco, counter) }>Agregar al carrito</button>
		</>
	)
}

export default ItemCount