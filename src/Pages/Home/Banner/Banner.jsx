

const Banner = () => {
    return (
        <div className="hero border mb-10 border-black min-h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/82zWqKZ/open-book-with-fairytale-scene.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="">
                <h1 className="mb-5 text-5xl text-pink-600 font-bold"> LibraServe </h1>
                <p className="mb-5"> LibraServe streamlines library management, offering book borrowing, returns, and user-friendly book updates. Your digital librarian for simplicity.</p>
                <button className="btn btn-primary">Lets Explore</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;