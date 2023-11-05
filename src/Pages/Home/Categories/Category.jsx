

const Category = ({ cat }) => {
    const { category, category_image } = cat;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="">
                <img  src={category_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                
                <div className="card-actions">
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Category;