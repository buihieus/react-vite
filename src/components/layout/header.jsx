import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    //anchor
    return (
        <ul>
            <li><Link class="active" to="#home">Home</Link></li>
            <li><Link to="/user">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    )
}

export default Header;