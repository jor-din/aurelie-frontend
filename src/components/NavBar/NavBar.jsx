import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../../Store";
import { useContext } from "react";
import { login } from "../../services/authService";

function NavBar() {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, userInfo } = state
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
  }
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
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
            <LinkContainer to="/profile">
                <NavDropdown.Item>
                  User Profile  
                </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/orderhistory'>
              <NavDropdown.Item>
                Order History
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider/>

            <Link 
              className="dropdown-item"
              to='/'
              onClick={signoutHandler}
            >
              Sign Out
            </Link>
            </NavDropdown>
          ): (
            <Link className="nav-link" to='signin'>
              Sign In
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
