
import React from "react";
import BookDescription from "./BookDescription";
import { useParams } from "react-router-dom";
const BookDetail = ()=> {

  
  const {id}=useParams();

    return (
      <div >
       
      <BookDescription id={id}/>
      </div>
    );
  }
  
  export default BookDetail;