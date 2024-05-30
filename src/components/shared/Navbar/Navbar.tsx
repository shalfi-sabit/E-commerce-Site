import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul> 
        </nav>
    );
};

export default Navbar;