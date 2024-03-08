import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './Reducer/rootReducers'
import  {thunk}  from 'redux-thunk';


const initialState = {};

const middleWares = [thunk]


const store = configureStore({
  reducer: rootReducers,
  
middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(middleWares),
preloadedState: initialState})

export default store