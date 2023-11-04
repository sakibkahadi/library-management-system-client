
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Routes/AuthProvider";


const SignUp = () => {
    const authInfo = useContext(AuthContext);
    const { createUser } = authInfo

    const [error, setError] = useState("");
   const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(firstName, lastName, email, password)

        if (password.length < 6) {
            return setError("your password must be at least more than 6 character")
        }
        else if (! /[A-Z]/.test(password)) {
            return setError("don't have a capital letter")
        }
        else if (! /[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)) {
            return setError("password don't have a special character")
        }
        setError('');
        createUser(firstName, lastName, email, password)
            .then(result => {
                
                 Swal.fire({
                    icon: 'success',
                    title: 'Congratulation',
                    text: 'Your registration is successfully completed',
                    
                  })
                  navigate('/')
                  updateProfile(result.user, {
                    displayName: firstName,
                    photoURL: "https://i.ibb.co/ZK8ZFsg/card-soft-template-paper-report.jpg"

                    
                })
                .then(()=>{
                    
                })
                .catch(error=>console.log(error))
            })
            .catch(() => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This email is already exist try another one',
                    
                  })

            })

    }
    return (
        <div className="space-y-5 mt-4 overflow-x-hidden ">
            <h1 className="text-4xl md:text-5xl font-bold  text-gray-500 text-center">Register</h1>
            <h2 className="text-sm md:text-xl text-center">Create your account. It's free and only takes a minute.</h2>
            <div className="hero   ">
                <div className="w-full md:w-3/4">

                    <div className="card  shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-green-600 text-white font-medium hover:bg-green-500" >Register Now</button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="h-2">
                {error && <p className="text-red-400 text-center">{error}</p>}
            </div>

            <div className="text-center">
                Already have an account? <span className="text-green-800"><Link to="/login"> Log in</Link></span>
            </div>
        </div>
    );
};


export default SignUp;