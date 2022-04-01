import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../Firebase'
import { getDocs, query, collection, where } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import ItemList from './ItemList'



const ItemListContainer = ({type}) => {  

	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { id}  = useParams()
	let filtered = []
  let documents = null
	
	useEffect(() => {
    if(id) {
      const q = query(collection(db, 'records'), where('format', '==', id ))
      documents = getDocs(q)
    } else {
      documents = getDocs(collection(db, 'records'))
    }

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
				{loading ? <h4 className='loading-content'>Cargando Discos</h4> : ''}
			</div>
			<ItemList discos={productos} loading={loading} />		
		</div>
	)
}

export default ItemListContainer

