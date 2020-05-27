import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';


const BookList=()=>{
    const {isLighthTheme,light,dark} = useContext(ThemeContext);
    const {books}=useContext(BookContext);
    const theme = isLighthTheme ? light : dark
    return(
        <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                {books.map(book=>{
                    return <li style={{background: theme.ui}} key={book.id}>{book.title}</li>
                })}
            </ul>
        </div>
    );
}

export default BookList;