import Item from './Item'

const ItemList = ({discos, loading}) => {	

	return (
		<>			
			<div className="status">				
				<h3>{loading ? 'Cargando catálogo' : 'Discos disponibles'}</h3>
			</div>
			<div className="records">
				{/*{console.log(discos)}*/}
				{
					discos.map((disco, index) => {
					return <Item disco={disco} key={disco.id}/>						
					})
				}
			</div>
		</>
	)
}

export default ItemList

