import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

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
                        <NavDropdown title="Git hub" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/kunalkashyap-1/feedParsify_doc">
                                    Frontend Docs
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://github.com/kunalkashyap-1/RSS_feed_parser-scraper">
                                Backend API
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="anchor" href="/#guide">Quick guide</Nav.Link>
                            <Nav.Link className="anchor" href="/#endpoint">Endpoints</Nav.Link>
                            <Link className="anchor nav-link" to="/Console" >Console</Link>
                            <Nav.Link className="anchor" href="/#example">Examples</Nav.Link>
                            
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default Header;