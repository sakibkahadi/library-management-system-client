import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./AllBook";
import AllBook from "./AllBook";


const AllBooks = () => {
    const loadedData = useLoaderData()
    const [allBooks, setAllBooks] = useState(loadedData)
    // console.log(loadedData)
    const handleAll = () => {
        setAllBooks(loadedData)
    }
    const handleFilter = () => {
        // console.log(data)
        // setData(data)
        setAllBooks(allBooks.filter(d => d.quantity > 0))
    }
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-10"> Books</h1>
            <div className="flex justify-end">
            <div>
                <p className="text-red-800 text-sm md:text-lg text-center lg:text-2xl mb-5">Filtered By Quantity </p>
                <div className="flex gap-10 justify-center mb-10">
                <button onClick={handleAll} className="btn btn-success">All</button>
                <button onClick={handleFilter} className="btn">Available</button>
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