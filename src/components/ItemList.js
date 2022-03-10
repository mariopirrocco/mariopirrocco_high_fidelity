import {useState, useEffect} from 'react'

import Item from './Item'


const ItemList = ({discos}) => {

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	
	useEffect(() => {
		// const promesa = new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		resolve(discos)
		// 	}, 2000)
		// })
		// .then((data) => {
		// 	setProductos(data)
		// })
		// .catch((error) => {
		// 	console.log('hubo un error en la carga del catálogo')
		// })
		// .finally(() => {
		// 	setLoading(false)
		// })

		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				setProductos(discos)
				setLoading(false)
			}, 2000)
		})
	})

	return (
		<>			
			<div className="status">				
				<h3>{loading ? 'Cargando catálogo' : 'Discos disponibles'}</h3>
			</div>
			<div className="records">
				{
					productos.map((disco, index) => {
						{/*console.log(disco)*/}
					return <Item disco={disco}/>
						
					})
				}
			</div>
		</>
	)
}

export default ItemList

