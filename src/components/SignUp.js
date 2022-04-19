import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../Firebase'
import { toast } from 'react-toastify'

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
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>¡Regístrate!</p>
        </header>
        
        <form onSubmit={ onSubmit }>
          <input type='text' className='emailInput' placeholder='Nombre' id='name' value={ name } onChange={ onChange } /><br />
          <input type='email' className='emailInput' placeholder='Email' id='email' value={ email } onChange={ onChange } />

          <div className="passwordInputDiv">
            <input type={ showPassword ? 'text' : 'password' } className='emailInput' placeholder='Clave (Min 6 caracteres)' id='password' value={ password } onChange={ onChange } /> <br />
            <p className='text-link' onClick={ () => setShowPassword((prevState) => !prevState) }>Mostrar clave</p>
          </div>
          <button>Enviar</button>
        </form>
      </div>
      
      <Link to='/ingresar' className='text-link'>Ingresar</Link>
      <Link to='/olvide-clave' className='text-link'>¿Olvidaste tu clave?</Link>
    </>
  )
}

export default SignUp