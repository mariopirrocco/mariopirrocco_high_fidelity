import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import ItemDetail from './ItemDetail'
import discos from '../discosFull.json'

const ItemDetailContainer = () => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const {id} = useParams()
	let selected = []
	
	useEffect(() => {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				
				selected = discos.filter((disco) => {					
					return disco.id === id
				})
				resolve(selected[0])
			}, 2000)
		})
		
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
			<div className="msg">
				{loading ? <h4 className='loading-content'>Cargando Disco</h4> : ''}
			</div>
			<div className="record-card">
				{loading ? '' : <ItemDetail disco={productos} />}
			</div>			
		</div>
	)
}

export default ItemDetailContainer

