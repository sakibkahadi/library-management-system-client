import axios from "axios";
import { Link } from "react-router-dom";


const AddBook = () => {
    const handleAddBook = (e)  =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const bookName = form.bookName.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const bookData = {photo, bookName, quantity, authorName, category, rating, description}
        
        axios.post('http://localhost:5000/books', bookData, {withCredentials:true})
        .then(res=>console.log(res.data))
    }
    return (
        <div>
            <h1 className="text-3xl md:text-6xl font-bold text-center ">Please add a book</h1>
            <div className="card  shadow-2xl bg-base-100">
                <form onSubmit={handleAddBook}  className="card-body ">
                    {/* first row  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name="bookName" placeholder="Book Name" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Books Quantity</span>
                            </label>
                            <input type="number" min={1} name="quantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name="authorName" placeholder="Author Name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Category</span>
                            </label>
                            <select name="category" className="input input-bordered">
                                <option value="Novel">Novel</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                                
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" min={0} name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* 4th row */}
                    <div >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="mb-5">
                        <button type="submit" className="btn btn-error w-full mb-5">Add Book</button>
                        <Link to="/"><button className="btn btn-secondary w-full">Go Home</button></Link>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddBook;