import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

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
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>¡Bienvenido!</p>
        </header>
        
        <form onSubmit={ onSubmit }>
          <input type='email' className='emailInput' placeholder='Email' id='email' value={ email } onChange={ onChange } />

          <div className="passwordInputDiv">
            <input type={ showPassword ? 'text' : 'password' } className='emailInput' placeholder='Clave' id='password' value={ password } onChange={ onChange } /> <br />
            <p className='text-link' onClick={ () => setShowPassword((prevState) => !prevState) }>Mostrar clave</p>
          </div>
          <button>Enviar</button>
        </form>
      </div>
      <Link to='/registrarse' className='text-link'>Registrarse</Link>
      <Link to='/olvide-clave' className='text-link'>¿Olvidaste tu clave?</Link>
    </>
  )
}

export default SignIn