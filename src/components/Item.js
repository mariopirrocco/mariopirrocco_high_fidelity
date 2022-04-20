import { NavLink } from 'react-router-dom'

const Item = ({ disco }) => {
	return (
		<div className="single-card" key={disco.id}>
			<p><strong>{ disco.artist }</strong></p>
			<p className='record-title'>{ disco.record }</p>
			<img src={`/${ disco.img }`} alt={`${ disco.artist } - ${ disco.record }`} />
			<NavLink to={ `/item/${disco.id}` } className="button-link">Ver detalles</NavLink>
		</div>
	)
}

export default Item



