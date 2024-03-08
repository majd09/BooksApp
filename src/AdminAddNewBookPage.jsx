import React from "react";
import { Row,Col } from "react-bootstrap";
import AdminSideBar from "./AdminSideBar";
import AdminAddBook from "./AdminAddBook";


const AdminAddNewBooksPage =()=>{

return (

    <div className="py-3">
        <Row>
            <Col sm='3' ms='3' md='2'>
               <AdminSideBar/>
            </Col>

            <Col sm='9' ms='3' md='10' >
                <AdminAddBook />
            </Col>


        </Row>

    </div>
)

}

export default AdminAddNewBooksPage;


