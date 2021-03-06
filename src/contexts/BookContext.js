import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
// import { v4 as uuid } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);
    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;