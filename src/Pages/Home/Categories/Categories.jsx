import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [bookCategory, setBookCategory] = useState([])
    useEffect(()=>{
        axios.get('https://libary-management-system-server.vercel.app/booksCategory')
        .then(res=>{
        setBookCategory(res.data)
        })
    },[])
    
    return (
        <div>
            <h1 className="text-center text-4xl md:text-6xl font-bold text-purple-400 mb-10">Our Book Categories</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                bookCategory.map(cat=><Category key={cat._id} cat={cat}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;