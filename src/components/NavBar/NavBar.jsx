import "./NavBar.scss";
import { NavButton, SearchForm } from '../'
import { Link } from "react-router-dom";

function NavBar() {


    return (
        <nav className="Nav-bar">
            <Link to={"/"}>
                <NavButton />
            </Link>
            <SearchForm />
        </nav>
    )
}

export default NavBar;