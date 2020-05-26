import React , {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
class NavBar extends Component {

    static contextType = ThemeContext
    render() { 
        //console.log(this.context)
        const {isLighthTheme,light,dark}= this.context;
        const theme = isLighthTheme?(light):(dark)
        return ( 
            <nav style={{ background:theme.ui , color:theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;