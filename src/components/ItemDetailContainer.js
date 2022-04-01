import { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { context } from './CartContext'


import { toast } from 'react-toastify'

import ItemDetail from './ItemDetail'
import discos from '../discosFull.json'

import { db } from '../Firebase'
import { getDocs, query, collection, where } from 'firebase/firestore'

const ItemDetailContainer = () => {  

	const result = useContext(context)

	const addItem = result.addItem;

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const {id} = useParams()
	let selected = []
	let [goToCart, setGoToCart] = useState(false)
	let documents = null

	
	let stock = 4
	const initial = 1
	
	const onAdd = (disco, count) => {
		addItem(disco, count);
		
		if(count === stock) {
			toast.success(`Has cargado ${count} discos a tu carrito, es todo el stock que tenemos en este momento`)
			setGoToCart(true)
		} else {
			toast.success(`Agregaste ${count} disco(s) a tu carrito`)
			setGoToCart(true)
		}		
	}
	
	useEffect(() => {
		
      const q = query(collection(db, 'records'), where('id', '==', id ))
      documents = getDocs(q)
    

    documents
      .then((response) => {
        const aux = []
        response.forEach((document) => {
          const singleRecord = {
            id: document.id,
            ...document.data()
          }
          aux.push(singleRecord)          
        })
        setProductos(aux)        
        setLoading(false)     
      })
      .catch(() => {
        toast.error('Hubo un error accediendo a la base de datos')
      })

		// const promesa = new Promise((resolve, reject) => {
		// 	setTimeout(() => {
				
		// 		selected = discos.filter((disco) => {					
		// 			return disco.id === id
		// 		})
		// 		resolve(selected[0])
		// 	}, 2000)
		// })
		
		// promesa.then((data) => {
		// 	setProductos(data)
		// })
		// .catch((error) => {
		// 	toast.error('hubo un error en la carga del disco')
		// })
		// .finally(() => {	
		// 	setLoading(false)
		// })		
		
	}, [id])
	
		

	return(
		<div className="item-list-container">
			<div className="msg">
				{loading ? <h4 className='loading-content'>Cargando Disco</h4> : ''}
			</div>
			<div className="record-card">
				{loading ? '' : <ItemDetail disco={productos} stock={stock} initial={initial} onAdd={onAdd} goToCart={goToCart} />}
			</div>			
		</div>
	)
}

export default ItemDetailContainer

