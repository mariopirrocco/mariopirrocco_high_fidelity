import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../Firebase'
import { toast } from 'react-toastify'
// import OAuth from './OAuth'

const SignUp = () => {
  const [ showPassword, setShowPassword ] = useState(false)
  const [ formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch(error) {
        toast.error('Hubo un problema con el registro de usuario')
    }
  }

  return(
    
    <div className='user-info-container'>
        <header>
          <h3>¡Regístrate!</h3>
        </header>
        
        <form onSubmit={ onSubmit }>
          <input type='text' className='form-input' placeholder='Nombre' id='name' value={ name } onChange={ onChange } /><br />
          
          <input type='email' className='form-input' placeholder='Email' id='email' value={ email } onChange={ onChange } />

          <div className='password-input-div'>
            <input type={ showPassword ? 'text' : 'password' } className='form-input' placeholder='Clave (Min 6 caracteres)' id='password' value={ password } onChange={ onChange } /> <br />
            
            <p className='show-password' onClick={ () => setShowPassword((prevState) => !prevState) }>Mostrar clave</p>
          </div>
          <button className='add-to-cart'>Enviar</button>
        </form>
      
      
      <Link to='/ingresar' className='text-link'>Ingresar</Link>
      <Link to='/olvide-clave' className='text-link'>¿Olvidaste tu clave?</Link>
    </div>
  )
}

export default SignUp