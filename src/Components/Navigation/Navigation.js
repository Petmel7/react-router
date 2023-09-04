import { NavLink } from 'react-router-dom';
import './Navigation.css';

// export default function Navigation() {
//     return (
//         <nav className='navbar'>
//             <NavLink
//                 exact to="/"
//                 className='nav-link'
//                 activeClassname='active-link'>Головна</NavLink>
            
//             <NavLink
//                 to="/authors"
//                 className='nav-link'
//                 activeClassname='active-link'>Автори</NavLink>
            
//             <NavLink
//                 to="/boocks"
//                 className='nav-link'
//                 activeClassname='active-link'>Книги</NavLink>
//         </nav>
//     )
// }



export default function Navigation() {
    return (
        <nav className="navbar">
            <NavLink
                to="/faq"
                style={isActive => ({
                color: isActive ? "green" : "blue"
                })}>
                FAQs
            </NavLink>
            
            <NavLink
                to="/authors"
                className="nav-link"
                activeClassName="active-link">Автори</NavLink>
            
            <NavLink
                to="/books"
                className="nav-link"
                activeClassName="active-link">Книги</NavLink>
        </nav>
    );
}
