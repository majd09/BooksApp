import React, { useEffect /*{useState }*/} from "react";
import avatar from '../src/avatar.png';
import './AdminAddBook.css';
//import { useDispatch,useSelector } from 'react-redux';
//import {getAllBooks} from "./Redux/Action/BooksAction";
//import {useDispatch} from 'react-redux';
//import {createBooks}from '../src/redux/actions/booksAction'


const AdminAddBook=()=>{
    /*
    const dispatch = useDispatch();
 const[img,setImg] = useState(avatar);
 const[title,setTitle] = useState('');
 const[author,setAuthor] = useState('');
 const[selectedFile,setSelectedFile] = useState(null);
 const[loading,setLoading] = useState(true);


    const onImageChange=(event)=>{

     if(event.target.files&&event.target.files[0])
            {

                setImg(URL.createObjectURL(event.target.files[0]));
                setSelectedFile(event.target.files[0])
            }
    }


   
        const handleSubmit=async(event)=>{

            event.preventDefault();

            const formData=new FormData();
            formData.append("img",selectedFile)
            formData.append("title",title)
            formData.append("author",author)

            setLoading(true)
           await dispatch(createBooks(formData))
            setLoading(false)
       }


                useEffect(()=>{

                        if (loading===false){
                            setTitle('')
                            setAuthor('')
                            setImg(avatar)
                            selectedFile(null)
                            console.log("loading is finished")
                            setLoading(true)
                        }

                },[loading])

*/


/* const dispatch=useDispatch();

 useEffect(()=>{

dispatch(getAllBooks());
 },[]
 
 )
*/
    return (

        <div>
            
            <div className="text-form pb-2" > Book Image </div>


           {/* <div  >

            <img  src={require('../src/avatar.png')} style={{ width: '120px', height:'120px' }}  />
    </div>*/}



                    <div>
                   
                    <label htmlFor='upload-photo'>
                    <img 
                    src={avatar}
                    alt='img'
                    height='100px'
                    width='100px'
                    style={{cursor:'pointer'}}
                    />
                    </label>
                    <input
                        type='file'
                        name='photo'
                      //  onChange={onImageChange}
                        id='upload-photo'
                       />
                      
                       </div>




            <div className="mb-3 m-3 w-25" >
            
                <label htmlFor="exampleFormControlInput1" className="form-label">BOOK TITLE</label>
                <input type="text" className="form-control"  placeholder="add book name "
                 // onChange={(e)=>setTitle(e.target.value)}
               //   value={title}
                />
            </div>


            <div className="mb-3 m-3 w-25">
            
                <label htmlFor="exampleFormControlInput1" className="form-label">BOOK Author</label>
                <input type="text" className="form-control"  placeholder="add book author "
              //  onChange={(e)=>setAuthor(e.target.value)}
              //  value={author}
                />
            </div>
            <button /*onClick={handleSubmit}*/ type="button" className="btn btn-dark">Save</button>
        </div>
    )


}

export default AdminAddBook;