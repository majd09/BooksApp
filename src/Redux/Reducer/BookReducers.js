import {Get_All_Books,Error,Insert_books} from '../Type.js'

const inital={
   // booksReducer:[],
    AllBooks:[],
  //  oneBookDetail:[],
    loading:true,

} 

const booksReducer= (state=inital,action)=>{

  switch(action.type){
    case Get_All_Books:
        return {
                ...state,
                AllBooks:action.payload,
                loading:false,        
               }
               case Insert_books: 
            return{  
                
                booksReducer:action.payload,
                loading:false ,} 
               case Error: 
               return {
                   loading:true,
                   booksReducer:action.payload,}
   
               default:
                return state;
}}

export default booksReducer;