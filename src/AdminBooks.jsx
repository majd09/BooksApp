import React from "react";
import { Row,Col } from "react-bootstrap";
import AdminSideBar from "./AdminSideBar";
import BooksList from "./BooksList";
import './BooksList.css'
const AdminBooks =()=>{

return (

    <div className="py-3">
        <Row>
            <Col sm='3' ms='3' md='2'>
               <AdminSideBar/>
            </Col>

            <Col sm='9' ms='3' md='10' >
                <BooksList  />
            </Col>


        </Row>

    </div>
)

}

export default AdminBooks;