import {useState, useEffect} from 'react'

import ItemDetail from './ItemDetail'
import discos from '../discosFull.json'


const ItemDetailContainer = () => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	
	useEffect(() => {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(discos)
			}, 2000)
		})
		
		promesa.then((data) => {
			setProductos(discos[0])
		})
		.catch((error) => {
			console.log('hubo un error en la carga del catálogo')
		})
		.finally(() => {	
			setLoading(false)
		})		
	})
	

	return(
		<div className="item-list-container">
			<div className="record-card">				
				{loading ? <h4 className='loading-content'>Cargando Disco</h4> : <ItemDetail disco={productos} />}
			</div>			
		</div>
	)
}

export default ItemDetailContainer

