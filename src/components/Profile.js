import { useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
  const auth = getAuth()
  const [ changeDetails, setChangeDetails ] = useState(false)
  const [ formData, setformData ] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const { name, email } = formData
  
  const navigate = useNavigate()

  const onLogOut = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name
        })
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name
        })
      }
    } catch(error) {
      toast.error('Hubo un error actualizando el usuario')
    }
  }

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  
  return(    
    <div className="user-info-container">
      <header className="profileHeader">
        <h3 className="pageHeader">Mi perfil</h3>        
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Datos personales</p>          
        </div>
        <form>
          <input type='text' id='name' className={ !changeDetails ? 'profileName form-input' : 'profileNameActive form-input' } disabled={ !changeDetails } value={ name } onChange={ onChange } /> <br/>
          
          <input type='text' id='email' className={ !changeDetails ? 'profileEmail form-input' : 'profileEmailActive form-input' } disabled={ !changeDetails } value={ email } onChange={ onChange } /> <br />

          <button className='add-to-cart extra-margin-bottom' onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState)=>!prevState)
            }}>
            { changeDetails ? 'Listo' : 'Cambiar' }
          </button> <br />
          <button type='button' className='add-to-cart' onClick={ onLogOut }>Cerrar sesión</button>
        </form>
      </main>
    </div>
  ) 
}

export default Profile