import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const {user, logout}=useContext(AuthContext);

    const handleLogout=()=>{
        logout()
        .then(()=>{})
        .catch(error => console.error(error))
    }
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <Navbar.Brand ><Link to={'/'}>Learn-will</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All Courses</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to={'/blog'}>Blog</Link>
                            <Link to={'/courses'}>Courses</Link>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/register'}>Register</Link>
                            <Nav.Link eventKey={2} href="#memes">
                               {
                               user?.uid ?
                              <>
                               <span>{user?.displayName}</span>
                               <Button onClick={handleLogout} variant="outline-light">Logout</Button>
                              </>
                               :
                               <Link to={'/register'}>Register</Link>
                               
                               }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                               {
                                user?.photoURL ?
                                <Image style={{height:'30px'}}
                                roundedCircle
                                src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                               }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;