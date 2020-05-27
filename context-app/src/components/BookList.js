import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';


const BookList=()=>{
    const {isLighthTheme,light,dark} = useContext(ThemeContext);
    const theme = isLighthTheme ? light : dark
    return(
        <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style={{background: theme.ui}}>the name of the wind</li>
                <li style={{background: theme.ui}}>the final empire</li>
                <li style={{background: theme.ui}}>the way of kings</li>
            </ul>
        </div>
    );
}

export default BookList;