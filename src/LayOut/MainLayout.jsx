import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div >
            <div className="mb-12 mt-6"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;