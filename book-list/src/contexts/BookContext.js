import React ,{createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,dispatch]=useReducer(bookReducer,[])
    //props.children represents the component that the provider is going to wrap
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;