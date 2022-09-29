import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx'
import Product from './pages/ProductInfo/ProductInfo';
import Footer from './components/Footer/Footer';
import * as authService from "./services/authService"
import MainPage from './components/MainPage/MainPage';


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
      <MainPage />
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/product/:slug' element={<Product />}/>
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App