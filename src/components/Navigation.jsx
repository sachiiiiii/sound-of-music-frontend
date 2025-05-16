import { Link } from 'react-router-dom'; // Import Link component

/* Links for navigating between pages */

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/songs">Songs</Link>
                </li>
                <li>
                    <Link to="/locations">Locations</Link>
                </li>
                <li>
                    <Link to="/auth">Login/Register</Link>
                </li>
                {/* Add logout button later if needed */}
            </ul>
        </nav>
    );
}

export default Navigation;