import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext) 
    const {search, pathname} = useLocation(); 
    const lastPath = pathname + search;
    const onLogout = () =>{
        logout();
        localStorage.setItem('lastPath', lastPath);
        navigate('/login', { replace: true });
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/marvel"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                         className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                         className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                         className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-link nav-item text-primary'>
                        { user?.name }
                    </span>
                    <button 
                    onClick={onLogout}
                    className='nav-link nav-item btn'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}