import React from "react";
import { Col,Row } from "react-bootstrap";

//import { useParams } from "react-router-dom";
//import VeiwBookDetailHooks from "./Hooks/view_Book_details-hooks";
const BookDescription = ()=> {

      //const {id}=useParams();
      //const [item]=VeiwBookDetailHooks(id);

    return (
      <div className="p-5">
     <Row className="py-5">
     <Col lg='4' >
     <img src='/'/>
      </Col>  

  
      <Col lg='8' >
      <h3>book title</h3>
            <span>id</span>
            <span>author</span>
            <h5>publication_year</h5>
            <h5>genre</h5>
            <p>description</p>
      </Col>


            
            
            </Row>
      
      </div>
    );
  }
  
  export default BookDescription;