import React , {Component,createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLighthTheme:true,
        light:{
            syntax : '#555', UI: '#ddd' , bg:'#eee'
        },
        dark:{
            syntax : '#ddd', UI: '#333' , bg:'#555'
        }
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state}}> 
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;