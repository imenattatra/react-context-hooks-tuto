import React , {Component,createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthentificated:false
     }
    toggleAuth=()=>{
        this.setState({ 
            isAuthentificated: !this.state.isAuthentificated
         })
    }
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state,toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;