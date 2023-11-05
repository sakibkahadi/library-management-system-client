import { useLoaderData } from "react-router-dom";



const SingleBook = () => {
    const loadedData = useLoaderData()
    const { photo, bookName, quantity, authorName, description } = loadedData;

    const handleBorrow = () => {
        console.log('hi')
    }
    return (
        <div>
            <h1 className="text-4xl mb-12 text-center font-bold text-orange-800">Book Name: {bookName}</h1>
            <div className="card lg:card-side bg-base-100 ">
                <figure><img className="h-[400px] w-[350px] lg:w-[450px]" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Author: {authorName}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>{description}</p>

                    {/* borrow button */}
                    <div className="card-actions justify-start gap-10">
                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my_modal_7" className="btn">Borrow</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold">Hello!</h3>
                                    <p className="py-4">This modal works with a hidden checkbox!</p>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                        </div>

                        {/* Read button */}
                        <button className="btn btn-primary">Read</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleBook;