import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Footer.css'
import logo from '../../assets/logo.svg';


const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <Nav className="nav-list col-lg-6 col-md-6">
                        <Nav.Link className="nav-item  fs-18 text-dark" as={Link} to="/resedential">Жилое</Nav.Link>
                        <Nav.Link className="nav-item  fs-18 text-dark" as={Link} to="/commercial">Коммерческое</Nav.Link>
                        <Nav.Link className="nav-item  fs-18 text-dark" as={Link} to="/garden">Садовое</Nav.Link>
                        <Nav.Link className="nav-item  fs-18 text-dark" as={Link} to="/contact">Контакты</Nav.Link>
                    </Nav>
                    <div className="nav-logo col-lg-6 col-md-6">
                        <a href="#"><img src={logo} alt="logo"/></a>
                        <p>TokarCompany - производственно-строительная компания</p>
                    </div>
                </div>
                <p>© 2020. Все права защищены.
                    Информация, представленная на сайте, не является публичной офертой.</p>
            </div>
        </footer>
    );
};

export default Footer;