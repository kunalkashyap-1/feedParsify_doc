import {Link} from "react-router-dom";

function Header() {
    return (<nav>
        <div className="logo">
        <img alt="logo" src="./logo192.png" />
        <Link to="/">FeedParsify</Link>
        </div>
        <div >
            <a className="anchor" href="/#into">Quick guide</a>
            <a className="anchor" href="/#endpoint">Endpoints</a>
            <Link className="anchor" to="/Console">Console</Link>
            <a className="anchor" href="/#example">Examples</a>
            <a className="anchor" href="https://github.com/kunalkashyap-1/news-api_scraper">Git hub</a>
        </div>
    </nav>);
}

export default Header;