import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Aurelie</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default NavBar;
