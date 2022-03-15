
const ItemDetail = ({disco}) => {	
	
	return (
		<>
			<div className="record-img">
				<img src={disco.img} alt={disco.artist} />
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
				{console.log(disco.tracklist)}
				<ol>
					{
						disco.tracklist.map((song, index)=>{
							return <li key={index}>{song.title}</li>
						}) 
					}
				</ol>
				<button className="add-to-cart">Agregar a carrito</button>
			</div>
		</>
	)
}


export default ItemDetail

