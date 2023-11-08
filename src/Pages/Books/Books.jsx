import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Book from "./Book";


const Books = () => {
    const loadedData = useLoaderData();
    const {category} = useParams();
    
    const [booksData, setBooksData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/books')
        .then(res=>{
            setBooksData(res.data)
        })
    },[])
    const books = booksData.filter(book => book.category === category);
    return (
        <div>
            
            <div className="grid gap-5 md:grid-cols-2">
            {
                books.map(book=><Book key={book._id} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;