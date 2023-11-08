import { useEffect, useState } from "react";

import AllBook from "./AllBook";
import axios from "axios";


const AllBooks = () => {
    
    const [allBooks, setAllBooks] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/allBooks', )
        .then(res=>setAllBooks(res.data))
    },[])
    const [button1Color, setButton1Color] = useState('blue');
    const [button2Color, setButton2Color] = useState('red');

    
    const handleAll = () => {
        axios.get('http://localhost:5000/allBooks')
        .then(res=>setAllBooks(res.data))
        
        setButton1Color('blue');
        setButton2Color('red');
    }
    const handleFilter = () => {
        // console.log(data)
        // setData(data)
        setAllBooks(allBooks.filter(d => d.quantity > 0))
        setButton1Color('red');
        setButton2Color('blue');
    }
    
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-10"> Books</h1>
            <div className="flex justify-center md:mr-10 md:justify-end">
                <div>
                    <p className="text-red-800 text-sm md:text-lg text-center lg:text-2xl mb-5">Filtered By Quantity </p>
                    <div className="flex gap-10 justify-center mb-10">
                        <button style={{ backgroundColor: button1Color }}  onClick={handleAll} className="btn text-white ">All</button>
                        <button style={{ backgroundColor: button2Color }} onClick={handleFilter} className="btn text-white">Available</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    allBooks.map(book => <AllBook key={book._id} book={book}></AllBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;