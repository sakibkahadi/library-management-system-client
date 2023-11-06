

const BorrowedBook = ({borrowedBook}) => {
    const { returnDate, currentDate, email, name, bookName, photo, category } = borrowedBook
    return (
        <div className="card  glass">
                <figure><img className="h-[400px] w-[350px] lg:w-[300px]" src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Book Name: {bookName}</h2>
                    <p>Category: {category}</p>
                    <p>Borrowed Date: {currentDate}</p>
                    <p>Return Date: {returnDate}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Return</button>
                    </div>
                </div>
            </div>
    );
};

export default BorrowedBook;