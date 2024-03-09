import {Get_All_Books,Error,Insert_books} from '../Type.js';
//import baseUrl from '../../API/URl.jsx';
import useGetData from '../../HOOKS/useGet.js';
import useInsertDatawithImage from '../../HOOKS/useInsertData.js';
//import baseUrl from '../../API/baseUrl.jsx';


  export  const getAllBooks=()=>async(dispatch)=>{



try{

    const response= await useGetData.get('/api/v1/books');
    console.log(response);
   // const respone=await useGetData('/api/v1/books');

  
  dispatch( {

    type:Get_All_Books,
    payload:response.data,
    loading:true,
  })
}
catch(e) {
    dispatch({

        type:Error,
        payload:"Error "+ e,
    })
  

}

}

export default getAllBooks;





export  const createBooks=(formData)=>async(dispatch)=>{

    try{
    
      const response= await useInsertDatawithImage.get('/api/v1/books',formData);
      console.log(response);
      dispatch( {
    
        type:Insert_books,
        payload:response,
      })
    }
    catch(e) {
        dispatch({
    
            type:Error,
            payload:"Error "+ e,
        })
      
    
    }
    
    }
    
    /*
    export  const getOneBook=(id)=>async(dispatch)=>{

      try{
      
        const response= await useGetData(`/api/v1/books/${id}`);
        console.log(response);
        dispatch( {
      
          type:get_Book_Details,
          payload:response,
        })
      }
      catch(e) {
          dispatch({
      
              type:Error,
              payload:"Error "+ e,
          })
        
      
      }
      
      }
      
  */