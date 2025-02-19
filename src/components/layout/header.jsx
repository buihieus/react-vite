import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    //anchor
    return (
        <ul>
            <li><NavLink  to="/">Home</NavLink></li>
            <li><NavLink to="/user">Users</NavLink></li>
            <li><NavLink to="/books">books</NavLink></li>
        </ul>
    )
}

export default Header;