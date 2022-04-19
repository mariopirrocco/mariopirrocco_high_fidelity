import { useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase'
import { Link, useNavigate } from 'react-router-dom'
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
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">Mi perfil</p>
        <button type='button' className='logOut' onClick={ onLogOut }>Cerrar sesión</button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Datos personales</p>
          <p className="changePersonalDetails" onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState)=>!prevState)
          }}>
            { changeDetails ? 'listo' : 'cambiar' }
          </p>
        </div>
        <form>
          <input type='text' id='name' className={ !changeDetails ? 'profileName' : 'profileNameActive' } disabled={ !changeDetails } value={ name } onChange={ onChange } />
          
          <input type='text' id='email' className={ !changeDetails ? 'profileEmail' : 'profileEmailActive' } disabled={ !changeDetails } value={ email } onChange={ onChange } />
        </form>
      </main>
    </div>
  ) 
}

export default Profile