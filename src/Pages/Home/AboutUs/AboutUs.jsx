

const AboutUs = () => {
    return (
        <div className="mt-10">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-black text-center mb-10">About Us</h1>
                <p className="text-gray-700 px-4 md:px-28">
                LibraServe Your Library Manager is the ultimate solution for efficient and user-friendly library management. This web application allows users to seamlessly borrow and return books from a vast selection of categories. The book management system is a breeze, enabling users to add, update, and organize their book collections effortlessly. LibraServe boasts a user-friendly interface, making navigation a simple and intuitive process for everyone.
                </p>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 mb-4 ">

                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/kSqwRB5/denise-jans-c-Ju-RGp-J13-Po-unsplash-1.jpg" alt="" />
                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/PGBFvdr/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg" alt="" />
                <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/phqny0L/marc-yusufu-30-Esqd-Q4-Xj-A-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;