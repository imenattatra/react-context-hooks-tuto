import React , {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

const NavBar = () => {
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const {isLighthTheme,light,dark}= useContext(ThemeContext);
    const theme = isLighthTheme?(light):(dark)
    return ( 
        <nav style={{ background:theme.ui , color:theme.syntax }}>
            <h1>Context App</h1>
            <div>
                { isAuthenticated? 'Logged in' : 'Logged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default NavBar;
