import { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { context } from './CartContext'

import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'

import { db } from '../Firebase'
import { getDocs, query, collection, where } from 'firebase/firestore'

const ItemDetailContainer = () => {  

	const result = useContext(context)

	const addItem = result.addItem;

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { id } = useParams()
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
		
    const q = query(collection(db, 'discos'), where('id', '==', id ))
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
		
	}, [id])		

	return(
		<div className="item-list-container">
			<div className="msg">
				{ loading ? <h4 className='loading-content'>Cargando Disco</h4> : null }
			</div>
			<div className="record-card">
				{ loading ? '' : <ItemDetail disco={productos} stock={stock} initial={initial} onAdd={onAdd} goToCart={goToCart} /> }
			</div>			
		</div>
	)
}

export default ItemDetailContainer

