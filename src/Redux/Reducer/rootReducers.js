
import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './BookReducers';

export default combineReducers ({
    AllBooks:booksReducer ,
})
