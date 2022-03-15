
const Item = ({disco}) => {
	
	return (

		<div key={disco.id}>
			<p><strong>{disco.artist}</strong></p>
			<p>{disco.record}</p>
			<img style={{width: "140px"}} src={disco.img} alt="" />
			
		</div>
	)
}

export default Item



