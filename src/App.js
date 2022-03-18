import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  
  return (
    <BrowserRouter>
      <Header />      
      <Main nombre="Andrés" apellido="López" />
      <Footer />
      <ToastContainer />
    </BrowserRouter>    
  )
}

export default App