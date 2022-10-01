import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx'
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import * as authService from "./services/authService"
import MainPage from './components/MainPage/MainPage';
import { Container } from 'react-bootstrap';


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
      <header>
      <NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
      </header>
      <main>
      {/* <MainPage /> */}
      <Container className='mt-5'>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/product/:slug' element={<ProductPage />}/>
      </Routes>
      </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App