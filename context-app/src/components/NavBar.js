import React , {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';
class NavBar extends Component {

    render() { 


        return ( 
            <AuthContext.Consumer>{(authContext)=>(
                
                <ThemeContext.Consumer>{(themeContext)=>{
                    const {isAuthenticated, toggleAuth} = authContext;
                    const {isLighthTheme,light,dark}= themeContext;
                    const theme = isLighthTheme?(light):(dark)
                    return(
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
                    )
                }}
                </ThemeContext.Consumer>
         )}
   
            </AuthContext.Consumer>

         );
    }
}
 
export default NavBar;