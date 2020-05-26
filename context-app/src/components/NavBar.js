import React , {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
class NavBar extends Component {

    render() { 


        return ( 
            <ThemeContext.Consumer>{(context)=>{
                const {isLighthTheme,light,dark}= context;
                const theme = isLighthTheme?(light):(dark)
                return(
                    <nav style={{ background:theme.ui , color:theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
         );
    }
}
 
export default NavBar;