import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <NavLink
                exact to="/"
                className=''
                activeClassname=''>Головна</NavLink>
            
            <NavLink
                to="/authors"
                className=''
                activeClassname=''>Автори</NavLink>
            
            <NavLink
                to="/boocks"
                className=''
                activeClassname=''>Книги</NavLink>
        </nav>
    )
}
