import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar =()=>{

return (

    
      <div className="sidebar">

        
            <div className="d-flex flex-column">

                <Link to='/admin/books' style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        All Books
                    </div>
                </Link>
                <Link to="/admin/books/new" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add New Book
                    </div>
                </Link>

            </div>
        </div>

    
)

}

export default AdminSideBar;