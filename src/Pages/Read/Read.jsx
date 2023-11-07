import { useLoaderData } from "react-router-dom";


const Read = () => {
    const loaderData= useLoaderData()
    
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center mb-10  font-bold">Book Name: <span className="text-purple-500">{loaderData.bookName}</span></h1>
            <p className="text-2xl md:text-4xl lg:text-6xl text-yellow-800 mb-10  font-semibold">Short Description: <span className="text-gray-600">{loaderData.description}</span></p>
            <p className="text-2xl md:text-4xl lg:text-6xl">More Content is coming Soon...</p>
        </div>
    );
};

export default Read;