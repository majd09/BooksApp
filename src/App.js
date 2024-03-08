import BookDetail from "./BookDetail";
import BooksList from "./BooksList";
import NavBar from "./NavBar/NavBar";
import AdminBooks from "./AdminBooks";


import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AdminAddNewBooksPage from "./AdminAddNewBookPage";

const App = ()=> {
  
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
         <Route path='/books' element={<BooksList/>}  />
         <Route path='/books/:id' element={<BookDetail/>} style={{textDecoration:'none'}} />
         <Route path='/admin/books' element={<AdminBooks/>}  />
         <Route path='/admin/books/new' element={<AdminAddNewBooksPage/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
