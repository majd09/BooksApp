import {useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getOneBook } from "../../src/Redux/Action/BooksAction";

const VeiwBookDetailHooks=(id)=>{

const dispatch=useDispatch();

useEffect(()=>{

dispatch(getOneBook(id));
},[id])

const oneBook= useSelector((state)=>state.AllBooks.oneBookDetail);
//console.log(oneBook);
let item=[]
if(oneBook) {
    item=oneBook
    
}

else{item=[];}


return [item];
}



export default VeiwBookDetailHooks;