import { Link } from "react-router-dom";


const AllBook = ({book}) => {
    const {_id, photo, bookName, rating, quantity, authorName, category, description } = book
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='h-[400px] w-[350px] lg:w-[300px]' src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Book: {bookName}</h2>
                <h2 className="card-title">Author: {authorName}</h2>
                <div className='flex justify-between'>
                    <span>{category}</span>
                    <span>Rating: {rating}/10</span>
                </div>
                <p>{quantity}</p>
                <div className="card-actions justify-end ">
                    <Link ><button className="btn btn-primary mt-12 ">Show Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default AllBook;