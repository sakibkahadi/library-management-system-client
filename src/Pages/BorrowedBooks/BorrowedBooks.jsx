import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";


const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    // const data = useLoaderData()
    const [borrowedBooks, setBorrowedBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/borrowedBooks')
            .then(res => setBorrowedBooks(res.data))
    }, [])


    const handleReturn = (id) => {
        // make sure user is confirm to delete
        const process = confirm('Are you sure You want to Return the Book')
        axios.get(`http://localhost:5000/books/${id}`)
        .then(res => {
            console.log(res.id)
        })
        if (process) {
            fetch(`http://localhost:5000/borrowedBooks/${id}`, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulation',
                            text: 'Successfully Return The Book ',

                        })

                        //remove the user from ui
                        const remainingBooks = borrowedBooks.filter(book => book._id !== id);
                        setBorrowedBooks(remainingBooks)
                        
                    }
                })
        }



    }

    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-10"> Borrowed Books: {user.displayName}</h1>


            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    borrowedBooks.map(borrowedBook => <div key={borrowedBook._id}>
                        <div className="card  glass">
                            <figure><img className="h-[400px] w-[350px] lg:w-[300px]" src={borrowedBook.photo} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Book Name: {borrowedBook.bookName}</h2>
                                <p>Category: {borrowedBook.category}</p>
                                <p>Borrowed Date: {borrowedBook.currentDate}</p>
                                <p>Return Date: {borrowedBook.returnDate}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleReturn(borrowedBook._id)} className="btn btn-primary">Return</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;