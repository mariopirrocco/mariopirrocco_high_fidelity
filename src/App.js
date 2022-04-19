import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CartContextProvider from './components/CartContext'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  
  return (  
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App