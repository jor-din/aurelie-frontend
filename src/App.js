import './App.css';
// import { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import Home from './pages/Home/Home.jsx'
// import Products from './components/Products/Products';
// import * as authService from "./services/authService"
// import * as tokenService from './services/tokenService'
import data from './data'

const App = () => {
  // const [user, setUser] = useState(authService.getUser())
  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   authService.logout()
  //   setUser(null)
  //   navigate('/')
  // }

  // const handleSignupOrLogin = () => {
  //   setUser(authService.getUser())
  // }

  return (
    <>
      {/* <NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/products' element={<Products />}/>
      </Routes> */}

      <main>
        <h1>Products</h1>
        <div className='products'>
          {data.products.map((product)=> (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
                </a>
                <p><strong>${product.price}</strong></p>
                <button>Add To Cart</button>
              </div>
            </div> 
          ))}  
        </div> 
      </main>
    </>
  )
}

export default App