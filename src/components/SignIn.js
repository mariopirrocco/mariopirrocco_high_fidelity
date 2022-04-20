import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import OAuth from './OAuth'

const SignIn = () => {
  const [ showPassword, setShowPassword ] = useState(false)
  const [ formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const onSubmit = async(e) => {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if(userCredential.user) {
        navigate('/usuario')
      }
    } catch(error) {
     toast.error('Usuario o clave incorrectos')
    }    
  }

  return(    
    <div className='user-info-container'>
      <header>
        <h3>Ingresa a High Fildelity Records</h3>
      </header>
      
      <form onSubmit={ onSubmit }>
        
      <input type='email' className='form-input' placeholder='Email' id='email' value={ email } onChange={ onChange } />
        <div className='password-input-div'>
          
          <input type={ showPassword ? 'text' : 'password' } className='form-input' placeholder='Clave' id='password' value={ password } onChange={ onChange } /> <br />
          <p className='show-password' onClick={ () => setShowPassword((prevState) => !prevState) }>Mostrar clave</p>
        </div>
        <button className='add-to-cart'>Enviar</button>
      </form>
      
      <OAuth />
      <Link to='/registrarse' className='text-link'>Registrarse</Link>
      <Link to='/olvide-clave' className='text-link'>¿Olvidaste tu clave?</Link>
    </div>
  )
}

export default SignIn