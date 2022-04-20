import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../Firebase'
import { getDocs, query, collection, where } from 'firebase/firestore'
import ItemList from './ItemList'

const ItemListContainer = ({type}) => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { id }  = useParams()
  let documents = null
	
	useEffect(() => {
    if(id) {
      const q = query(collection(db, 'discos'), where('format', '==', id ))
      documents = getDocs(q)
    } else {
      documents = getDocs(collection(db, 'discos'))
    }

    documents
      .then((response) => {
        const records = response.docs.map((document) => document.data())
        setProductos(records)        
      })
      .catch(() => toast.error('Hubo un error accediendo a la base de datos'))
      .finally(() => setLoading(false))
	}, [id])

	return(
		<div className="item-list-container">
			<div className="msg">
				{ loading ? <h4 className='loading-content'>Cargando Discos</h4> : null }
			</div>
			<ItemList discos={ productos } loading={ loading } />		
		</div>
	)
}

export default ItemListContainer

