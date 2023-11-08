

const ChooseUs = () => {
    return (
        <div className='mt-12'>
            <h1 className="text-center font-bold text-4xl mb-10">Why Choose Us</h1>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div>
        <img className="h-96 w-full" src="https://i.ibb.co/vBK89nq/21532481-6463392.jpg" alt="" />
                </div>
                <div>
                <h1 className="text-center  font-bold text-gray-500 text-3xl mb-4">Our Features</h1>
                    <p className='text-orange-800 px-2'>  <span className='text-pink-600 font-bold'>Borrow and Return</span>: Easily borrow and return books from diverse categories.</p>
                    <p className='text-orange-800 px-2'>  <span className='text-pink-600 font-bold'>Book Management</span>: Add, update, and organize books effortlessly.</p>
                    <p className='text-orange-800 px-2'>  <span className='text-pink-600 font-bold'>User-Friendly Interface</span>: Simple and intuitive design for seamless navigation.</p>
                    <p className='text-orange-800 px-2'>  <span className='text-pink-600 font-bold'>Search & Filter</span>: Efficiently locate books by title, author, or category.</p>
                    <p className='text-orange-800 px-2'>  <span className='text-pink-600 font-bold'>Notifications</span>: Receive reminders for overdue books and important updates.</p>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;