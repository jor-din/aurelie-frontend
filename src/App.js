import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product';
import * as authService from "./services/authService"



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
      <NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/product/:slug' element={<Product />}/>
      </Routes>
    </>
  )
}

export default App