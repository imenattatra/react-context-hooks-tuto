import React ,{createContext, useState} from 'react';
import { uuid } from 'uuidv4';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks]=useState([
        { id: 1, title: 'first title', author:'first author'},
        { id: 2, title: 'second title', author:'second author'},
        { id: 3, title: 'third title', author:'third author'},
    ])
    const addBook=(title,author)=>{
        console.log(title,author)
        setBooks([...books,{ id: uuid(),title,author}])
        console.log(books)
    }
    const removeBook=(id)=>{
        setBooks(
            books.filter(book=>book.id!==id)
        )
    }
    //props.children represents the component that the provider is going to wrap
    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;