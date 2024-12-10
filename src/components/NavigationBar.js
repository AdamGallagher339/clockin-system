import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">ClockIn System</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/create">Employees</Nav.Link>
              <Nav.Link href="/read">MyProfile</Nav.Link>
              <Nav.Link href="/read">Manager</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;