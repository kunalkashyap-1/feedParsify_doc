import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar expand="md">
            <Container fluid >
            <Navbar.Brand >
                <Link className="navbar-brand" to="/">FeedParsify</Link>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto ">
                    <Nav >
                        <Nav.Link className="anchor" href="/#guide">Quick guide</Nav.Link>
                        <Nav.Link className="anchor" href="/#endpoint">Endpoints</Nav.Link>
                        <Link className="anchor nav-link" to="/Console" >Console</Link>
                        <Nav.Link className="anchor" href="/#example">Examples</Nav.Link>
                        <Nav.Link className="anchor" href="https://github.com/kunalkashyap-1/RSS_feed_parser-scraper">Git hub</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        

        );
}

export default Header;