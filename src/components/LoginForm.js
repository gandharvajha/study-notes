import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return (
        <div>
            <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6"
            >
                <label >
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email Address<sup className="text-[#c40e1a]">*</sup></p>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                        className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                    />
                </label>


                <label className="w-full relative">
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Password<sup className="text-[#c40e1a]">*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        name="password"
                        className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                    />
                    <span 
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>
                    <Link to="#">
                        <p className="text-xs text-blue-100 ml-auto max-w-max">
                            Forgot Password
                        </p>
                    </Link>
                </label>

                <button className="bg-[#fae505] rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-5">
                    Sign In
                </button>


            </form>
        </div>
    )
}

export default LoginForm;