import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../../Routes/AuthProvider";




const Navbar = () => {
    const authInfo = useContext(AuthContext);
    const { user, logOut } = authInfo;
    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user?.email ?<>
            <div className="lg:flex">
            <span><li><NavLink to='/addBook'>Add Book</NavLink></li></span>
            <span> <li><NavLink to='/allBooks'>All Book</NavLink></li></span>
            <span> <li><NavLink to='/borrowedBooks'>Borrowed Book</NavLink></li></span>
            <span><li><button  onClick={handleLogOut}>LogOut</button></li></span>
        </div>
        </>:<li><NavLink to='/login'>Log In</NavLink></li> 
        }


        

        

    </>
   
    return (



        <div className="navbar bg-base-100">
            <div className="navbar-start    ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden " onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose ></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                        }
                    </label>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 duration-1000 absolute 
            ${open ? '' : '-top-60'}`}>

                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-10 lg:w-16" src="https://i.ibb.co/hBKpQQW/Libra-Serve-logos-transparent.png" alt="" />
                    <a className=" normal-case text-xl md:text-2xl  lg:text-4xl ">LibraServe</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">


                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1">profile</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                            <div className="card w-28 ">
                                <div className="card-body space-y-2">
                                    <div className="flex justify-center">

                                        {
                                            user.photoURL && <img className="h-10 w-10 rounded-full " src={user.photoURL} alt="profile pic" />

                                        }
                                    </div>
                                    <p>{user.displayName}</p>

                                </div>
                            </div>

                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};
export default Navbar;