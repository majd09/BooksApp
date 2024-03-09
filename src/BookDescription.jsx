import React from "react";
import { Col,Row } from "react-bootstrap";

import { useParams } from "react-router-dom";
import VeiwBookDetailHooks from "./HOOKS/viewBookDetailsHooks";
const BookDescription = ()=> {
const {id}=useParams();
     
      const [item]=VeiwBookDetailHooks(id);

    return (
      <div className="p-5">
     <Row className="py-5">
     <Col lg='4' >
     <img src={item.cover_image}/>
      </Col>  

  
      <Col lg='8' >
      <h3> {item.title}</h3>
            <span>{item.id}</span>
            <span>{item.author}</span>
            <p>{item.description}</p>
            <h5>{item.genre}</h5>
           
      </Col>


            
            
            </Row>
      
      </div>
    );
  }
  
  export default BookDescription;