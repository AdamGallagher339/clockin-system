import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/ClockIn">ClockIn System</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Employees">Employees</Nav.Link>
              <Nav.Link href="/Manager">Manager</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;