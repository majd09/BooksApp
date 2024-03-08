
//import { Link } from 'react-router-dom';
import './BookCard.css'
const BookCard = ({books})=> {
    //const{ title,author,cover_image,name}=books;
  return (
    <div className="book_card_container">
    {/* <Link to={`/books/${books.id}`} ></Link>*/}
     <img src={books.cover_image} alt={`${books.title}`} />
     
      <div className="footer"> 
      <span className="title ">{books.author}</span>
      <span className="author  ">{books.title}</span>
        
      </div>
    </div>
  );
}

export default BookCard;
