import {useState, useEffect} from 'react'

import ItemList from './ItemList'
import discos from '../discosFull.json'


const ItemListContainer = () => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	
	useEffect(() => {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(discos)
			}, 2000)
		})
		
		promesa.then((data) => {
			setProductos(discos)
		})
		.catch((error) => {
			console.log('hubo un error en la carga del catálogo')
		})
		.finally(() => {
			setLoading(false)
		})

		// const promesa = new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		setProductos(discos)
		// 		setLoading(false)
		// 	}, 2000)
		// })
	})
	

	return(
		<div className="item-list-container">
			<ItemList discos={productos} loading={loading} />
		</div>
	)
}

export default ItemListContainer

