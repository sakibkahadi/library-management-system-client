
import { Link, useLoaderData } from "react-router-dom";

import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "../../components/DatePicker";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import axios from "axios";


const SingleBook = () => {
    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData()
    const [loader, setLoader] = useState(loadedData)
    // const [total, setTotal] = useState({})
    const [total, setTotal] = useState([])
    const { _id, photo, bookName, quantity, authorName, category, description  } = loader;
    let amount = quantity;
    //quantity = 5

    const handleBorrow = (e) => {     
        const returnDate = e.target.returnDate.value
        const email = user ? user.email : '';
        const name = user ? user.displayName : '';
        const currentDate = e.target.localDate.value
        
        const bookName = loadedData ? loadedData.bookName : '';
        const photo = loadedData ? loadedData.photo : '';
        const category = loadedData ? loadedData.category : '';

        const borrowedData = { returnDate, currentDate, email, name, bookName, photo, category }

        axios.post('http://localhost:5000/borrowedBooks', borrowedData)
            .then(res => {
                if (res.data.acknowledged) {
                    console.log("hhiii")
                }

            })
        amount = parseInt(amount) - 1;
        const send = JSON.stringify(amount)
        console.log(send)
        fetch(`http://localhost:5000/books/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: send })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setTotal(amount)
                }
                console.log(data)
            })
        


    }


    return (
        <div>
            <h1 className="text-4xl mb-12 text-center font-bold text-orange-800">Book Name: {bookName}</h1>
            <div className="card lg:card-side bg-base-100 ">
                <figure><img className="h-[400px] w-[350px] lg:w-[450px]" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Author: {authorName}</h2>
                    <p>Quantity: {quantity}</p>
                    

        

                    {/* borrow button */}
                    <div className="card-actions justify-start gap-10">
                        <div>
                            {/* The button to open modal */}
                           
                            {quantity==0 ? <button className="btn">Borrow</button>:  <label htmlFor="my_modal_7" className="btn">Borrow</label>}

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box h-96 flex justify-center  text-center">

                                    <DatePicker handleBorrow={handleBorrow} quantity={quantity}></DatePicker>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                        </div>

                        {/* Read button */}
                        <Link to={ `/read/${_id}`}><button className="btn btn-primary">Read</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleBook;