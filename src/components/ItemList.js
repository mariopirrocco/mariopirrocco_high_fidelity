import Item from './Item'

const ItemList = ({ discos, loading }) => {	
  const showRecords = () => {
    return discos.map((disco) => {
      return <Item disco={disco} key={disco.id}/>
    })
	}
	
	return (
		<>			
			<div className="records">				
				{ loading ? '' : showRecords() }
			</div>
		</>
	)
}

export default ItemList
