import Item from './Item'

const ItemList = ({discos, loading}) => {	

	return (
		<>			
			<div className="status">				
				<h3>{loading ? 'Cargando catálogo' : 'Discos disponibles'}</h3>
			</div>
			<div className="records">
				{
					discos.map((disco, index) => {
					return <Item disco={disco}/>
						
					})
				}
			</div>
		</>
	)
}

export default ItemList

