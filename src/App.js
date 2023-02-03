import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx'
import ProductPage from './pages/ProductPage/ProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import * as authService from "./services/authService"
import MainPage from './components/MainPage/MainPage';
import Cart from './pages/Cart/Cart';
import { Container } from 'react-bootstrap';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignUpForm/SignupForm';
import Shipping from './pages/Shipping/Shipping';


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
 

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <ToastContainer position='bottom-center' limit={1}/>
      <header>
      <NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
      </header>
      <main>
      {/* <MainPage /> */}
      <Container className='mt-5'>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/product/:slug' element={<ProductPage />}/>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/signin' element={<LoginForm />}></Route>
        <Route path='signup' element={<SignupForm />}></Route>
        <Route path='/shipping' element={<Shipping/>}/>
      </Routes>
      </Container>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
}

export default App