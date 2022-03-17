
const ItemDetail = ({ disco }) => {	

	return (
		<div className="single-record">
			<div className="record-img">
				<img src={`/${disco.img}`} alt={`${disco.artist} - ${disco.record}`} />
			</div>
			<div className="record-data">				
				<h3>{disco.artist}</h3>
				<h4>{disco.record}</h4>
				<p><strong>Precio:</strong> U$S {disco.price}</p> <hr />
				<p><strong>Año:</strong> {disco.released}</p>
				<p><strong>Estilo:</strong> {disco.genre}</p>
				<p><strong>Formato:</strong> {disco.format}</p>
				<p><strong>Estilo:</strong> {disco.genre}</p>
				<p><strong>Canciones:</strong></p>
				<ul>
					{
						disco.tracklist.map((track, index) => {
							return <li key={index}>{track.title} </li>
						})
					}
				</ul>
				

				<button className="add-to-cart" onClick={()=>console.log(disco.id)}>Agregar a carrito</button>
			</div>
		</div>
	)
}


export default ItemDetail

