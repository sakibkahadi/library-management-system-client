import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { useEffect, useState } from "react";


const MainLayout = () => {
    const [theme, setTheme] = useState(null)

   
    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])
    
const handleThemeSwitch =()=>{
    setTheme(theme=== "dark"? "light": "dark")
}

    return (
        <div className="" >
            <div className="mb-12 mt-6"><Navbar handleThemeSwitch={handleThemeSwitch}></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;