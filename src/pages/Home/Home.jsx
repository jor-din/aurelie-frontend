import React from "react";
import { Link } from "react-router-dom";
import * as productsService from "../../services/productsService";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import logger from "use-reducer-logger";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const allProductsData = await productsService.allProducts();
        dispatch({ type: "FETCH_SUCCESS", payload: allProductsData });
      } catch {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      // setProducts(productData);
    };
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Aurelie - Find Your Golden Hour</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm ={6} md={4} lg={3} className='mb-3'>
                <Product product={product}/>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Home;
