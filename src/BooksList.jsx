import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './BooksList.css';
import baseUrl from './API/baseUrl'
//import axios from 'axios';



const BooksList = () => {

  const [books, setBooks] = useState([]);


  const fetchData=async()=>{
  try {
    const response = await baseUrl.get('/api/v1/books');
    setBooks(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

useEffect(() => {

  fetchData();
},[])


 
  return (
    
   <div className='books_container'>

        {
        books?( books.map((books)=>(
              
          <BookCard   key={books.id} books={books}  />

      ))):null
            }
    
    </div>

  )
            }


export default BooksList;