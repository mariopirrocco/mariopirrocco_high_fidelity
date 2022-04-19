import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('El mensaje fue enviado')
    } catch (error) {
      toast.error('No se pudo enviar el mensaje')
    }
  }

  return(
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Olvidé mi clave</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className='forgotPasswordLink' to='/ingresar'>
            Ingresar
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword