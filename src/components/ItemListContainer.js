import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import ItemDetail from './ItemDetail'
import ItemList from './ItemList'
import discos from '../discosFull.json'


const ItemListContainer = ({type}) => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const {id} = useParams()
	let filtered = []
	
	useEffect(() => {

		const promesa = new Promise((resolve, reject) => {

			setTimeout(() => {
				if(id === 'vinilos') {
					filtered = discos.filter((disco) => {
						return disco.format === 'vinyl'
					})
				} else if(id ==='cds') {
					filtered = discos.filter((disco) => {
						return disco.format === 'cd'
					})
				} else if(id ==='cassettes') {
					filtered = discos.filter((disco) => {
						return disco.format === 'cassette'
					})
				}	else if(id === undefined) {
					filtered = discos
				} else {
					filtered = discos.filter((disco) => {
						return disco.id === id
					})
				}
				resolve(filtered)
			}, 2000)
		}, [id])
		
		promesa.then((data) => {
			setProductos(data)
		})
		.catch((error) => {
			toast.error('hubo un error en la carga del catálogo')
		})
		.finally(() => {
			setLoading(false)
		})
	}, [id])

	return(
		<div className="item-list-container">
			{loading ? 'Cargando elementos' : 'Elementos cargados'}
			<ItemList discos={productos} loading={loading} />
		
		</div>
	)
}

export default ItemListContainer

