import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import { useLoaderData } from "react-router-dom";
import BorrowedBook from "./BorrowedBook";


const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const borrowedBooks = useLoaderData()
    
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-10"> Borrowed Books: {user.displayName}</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                borrowedBooks.map(borrowedBook=> <BorrowedBook key={borrowedBook._id} borrowedBook={borrowedBook}></BorrowedBook>)
            }
            </div>
        </div>
    );
};

export default BorrowedBooks;