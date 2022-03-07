import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

	let stock = 8
	const initial = 1
	const onAdd = (value) => {
		if(value === stock) {
			console.log(`Has cargado ${value} discos en tu carrito, es todo el stock que tenemos en este momento`)
		} else {
			console.log(`Tienes ${value} disco(s) en tu carrito`)
		}		
	}

	return(
		<div className="item-list-container">
			<ItemCount stock={stock} initial={initial} onAdd={onAdd} />
		</div>
	)
}

export default ItemListContainer

