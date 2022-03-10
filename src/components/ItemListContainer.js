import ItemList from './ItemList'
import discos from '../discosFull.json'

const ItemListContainer = () => {  
	return(
		<div className="item-list-container">
			<ItemList discos={discos}/>
		</div>
	)
}

export default ItemListContainer

