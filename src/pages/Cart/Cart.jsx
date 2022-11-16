import { useContext} from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'
import { Helmet } from 'react-helmet-async'
import { Col, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap'

const Cart = () => {
    const {state, dispatch: ctxDispatch} = useContext(Store)
    const {
        cart: { cartItems },
    } = state
  return (
    <div>
        <Helmet>
            <title>Cart</title>
        </Helmet>
        <h1>Cart</h1>
        <Row>
            <Col md={8}>
                {cartItems.length === 0 ? (
                <p>Cart is empty! </p> 
                ) : (
                    <ListGroup>
                        {cartItems.map((item) => (
                            <ListGroupItem key={item._id}>
                                <Row className="align-items-center">
                                    <Col md={4}>
                                        <img src={item.image} alt={item.name} className='img-fluid rounded img-thumbnail' /> {' '}
                                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant='light' disabled={item.quantity === 1}>
                                            <i className="fas fa-minus-circle"></i>   
                                        </Button> {' '}
                                        <span>{item.quantity}</span> {' '}
                                        <Button variant='light' disabled={item.countInStock}>
                                            <i className="fas fa-plus-circle"></i>   
                                        </Button>
                                    </Col>
                                    <Col md={3}>
                                        <span>${item.price}</span>{' '}
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='light'>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}></Col>
        </Row>
    </div>
  )
}

export default Cart