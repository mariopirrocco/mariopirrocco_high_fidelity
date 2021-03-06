import { useContext } from 'react'
import { context } from './CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Cart = () => {	
	const result = useContext(context)	
	const { cart, removeItem, clear, total } = result
	const handleBorrar = (item) => {
		removeItem(item)
	}
  const handlePurchase = () => {
    const order = {
      buyer: {
        name: 'Mario',
        phone: '598-989999',
        email: 'mario@mail.com'
      },
      items: cart,
      date: serverTimestamp(),
      total: total
    }
    const orderCollection = collection(db, 'orders')
    const orderRequest = addDoc(orderCollection, order)

    orderRequest.then((response) => {
      toast.success(`Tu orden de compra es: ${response.id}`)
      clear()
    })
	}
  
	return(
		<>
			<div className="msg">
				<h4>Carrito</h4>
			</div>
			<div>
				{
					cart.map((item, index) => {					
						const totalValue = item.disco.price * item.count						
						return (
              <div key={index} className="cart-items">
                <div className="img-container">
                  <img src={`/${item.disco.img}`} alt="" />
                </div>
                <div className="record-data">
                  <h3>{item.disco.artist}</h3>
                  <h4>{item.disco.record}</h4>
                  <p>Precio unitario: ${item.disco.price}</p>
                  <p>Cantidad: {item.count}</p>
                  <p>Precio total: ${totalValue}</p>
                </div>
                <div className="record-remove">
                  <button className="add-to-cart" onClick={()=>handleBorrar(item)}>Quitar item</button>
                </div>
              </div>
						)
					})
				}
			</div>
			<div className="total-price">
				<p><strong>{cart.length ? 
					<>El valor total de tu compra es: ${ total }</>
					: <>
              <p>En este momento no tienes discos seleccionados</p> 
              <Link to="/">
						    <button className="add-to-cart">Volver al cat??logo</button>
              </Link>
            </>
				}</strong></p>
			</div>
			<div className="clear">
				{cart.length ? 
          <>
            <button className="add-to-cart extra-margin-bottom" onClick={handlePurchase}>Finalizar compra</button> <br />
            <button className="add-to-cart" onClick={clear}>Borrar todo</button>
            
          </>
          : null}
			</div>
			
		</>
	)
}

export default Cart
