import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../../Store";
import { useContext } from "react";

function NavBar() {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <Navbar bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Aurelie</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <Link to='/cart' className="nav-link">Cart
          {cart.cartItems.length > 0 && (
            <Badge pill bg='danger'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</Badge>
          )}
          </Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
