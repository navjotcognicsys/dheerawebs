import {Container, Nav,Navbar, NavDropdown, Button, Dropdown} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import usePermission from '../hooks/usePermission';

function NavigationBar() {

  const { adminOptions } = usePermission();

  const { currentUser, logout } = useAuth();

  const location = useLocation();
  console.log(location.pathname)

  return (
    <Navbar expand="lg" className={location.pathname !== "/" && "myshade"}>
      <Container>
        {
          location.pathname !== "/" && <Navbar.Brand as={Link} to="/">
          <div className='logo'>
            <div className="name dheera">
              <h4>DHEERA </h4>
              <p> a FOGSI - UNICEF led initiative</p>
            </div>
            <div className="name rac">
              <h4>Respectful Abortion Care </h4>
              <p> a FOGSI - WHO led initiative</p>
            </div>
          </div>
        </Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {
              currentUser ? <>
              <Nav.Link  as={Link} to="/dashboard" >Dashboard</Nav.Link>
            <NavDropdown align="end" title="Admin" id="basic-nav-dropdown">
              {
                adminOptions.map((option, index) => {
                  console.log(option)
                  if(option.value){
                    return(
                      <NavDropdown.Item key={index} as={Link} to={`/admin/${option.path}`}>
                      {option.name}
                      </NavDropdown.Item>
                    )
                  }else{
                    return null
                  }

                })
              }

              <NavDropdown.Divider />
              <div style={{padding: '0.25rem 1rem'}}>
              <Button 
              variant="outline-danger" 
              size="sm"
              
                  onClick={logout}
                >Logout</Button>
              </div>
            </NavDropdown>
              </> : 
              <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link> 
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;