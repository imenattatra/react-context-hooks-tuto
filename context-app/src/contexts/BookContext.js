import React, { useState,createContext } from 'react'

export const BookContext=createContext();

const BookContextProvider = (props) => { // we need to pass props as parameters since it's not class , in the class they are passed automatically
    //create a state
    const [books,setBooks]=useState([
        {id:1, title:'first title'},
        {id:2, title:'second title'},
        {id:3, title:'third title'},
        {id:4, title:'fourth title'},
    ])
    //wrapping children inside provider
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children} 
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;