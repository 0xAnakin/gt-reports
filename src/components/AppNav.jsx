import { Nav, NavItem, NavLink } from 'reactstrap';
import { useLocation } from 'react-router-dom'

function AppNav() {

    const { pathname } = useLocation();

    return (
        <Nav pills={true} className='app-nav'>
            <NavItem>
                <NavLink active={pathname === '/'} href="#/">Αρχική</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={pathname === '/vehicles'} href="#/vehicles">Οχήματα</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={pathname === '/vehicle-routes'} href="#/vehicle-routes">Διαδρομές</NavLink>
            </NavItem>
        </Nav>
    );
}

export default AppNav;


