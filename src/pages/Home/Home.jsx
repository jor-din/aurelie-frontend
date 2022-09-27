import React from 'react'
import { Link } from 'react-router-dom'
import * as productsService from '../../services/productsService'
import { useEffect, useState } from 'react'

export default function Home() {
   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      const productData = await productsService.allProducts()
      setProducts(productData)
    }
    fetchAllProducts();
  }, [])

  return (
    <div>
        <h1>Featured Products</h1>
        <div className='products'>
          {products.map((product)=> (
            <div className='product' key={product.slug}>
              <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              </Link>
              <div className='product-info'>
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
                </Link>
                <p><strong>${product.price}</strong></p>
                <button>Add To Cart</button>
              </div>
            </div> 
          ))}  
        </div> 
      
    </div>
  )
}
