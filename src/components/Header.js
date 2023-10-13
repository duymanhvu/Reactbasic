import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoApp from '../assets/images/2.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleLogoutRedux } from '../redux/actions/userAction'

const Header = (props) => {

    const navigate = useNavigate();

    const user = useSelector(state => state.user.account)
    const dispatch = useDispatch();


    const handleLogout = () =>{
        dispatch(handleLogoutRedux());
    }

    useEffect(() => {
        if (user && user.auth === false && window.location.pathname !== '/login') {
            navigate("/");
            toast.success("Logout success!")
        }
    }, [user])

    

   
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">
                
                <img 
                    src={logoApp}
                    width='50'
                    height='30'
                    className='d-inline-block align-top'
                    alt='React Bootstrap logo'
                />

                <span>App Test</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            { (user) && (user.auth || window.location.pathname === "/") &&
                <>
                    <Nav className="me-auto" >

                        <NavLink to="/" className="nav-link">Home</NavLink>

                        <NavLink to="/users" className="nav-link">Manage Users</NavLink>
                    </Nav>
                    <Nav>
                        {user && user.username && <span className='nav-link'>Welcome {user.username}</span>}
                        <NavDropdown title="Setting" >

                        {user && user.auth === true
                            ? <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                            : <NavLink to='/login' className = 'dropdown-item'>Login</NavLink>
                        }

                        </NavDropdown>
                    </Nav>
                </>
            }
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </>)
}

export default Header;