// Header.jsx
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MyButton from "../ui/MyButton.jsx";
import './Header.css';
import logo from '../../assets/logo.svg';
import telegram from '../../assets/socials/telegram.png';
import whatsapp from '../../assets/socials/whatsapp.png';
import viber from '../../assets/socials/viber.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="fs-18 ms-3" as={Link} to="/resedential">Жилое</Nav.Link>
                        <Nav.Link className="fs-18 ms-3" as={Link} to="/commercial">Коммерческое</Nav.Link>
                        <Nav.Link className="fs-18 ms-3" as={Link} to="/garden">Садовое</Nav.Link>
                        <Nav.Link className="fs-18 ms-3" as={Link} to="/contact">Контакты</Nav.Link>
                        <NavDropdown className="fs-18 ms-3" title="Связаться с нами">
                            <NavDropdown.Item href="#action/3.1">
                                <MyButton className="social-btn border-0">
                                    <a className="text-decoration-none text-black fs-18" href="#">
                                        <img className="social-img m-2" src={telegram} alt="telegram" /> Telegram
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <MyButton className="social-btn border-0">
                                    <a className="text-decoration-none text-black fs-18" href="#">
                                        <img className="social-img m-2" src={whatsapp} alt="whatsapp" /> WhatsApp
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <MyButton className="social-btn border-0">
                                    <a className="text-decoration-none text-black fs-18" href="#">
                                        <img className="social-img m-2" src={viber} alt="viber" /> Viber
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
