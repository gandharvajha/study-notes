import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();


    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setshowConfirmPassword]=useState(false);

    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""

        }
    )
const[accountType,setAccountType]=useState("student");
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        }
        console.log("printing account data");
        console.log(accountData);

        navigate("/dashboard");

    }
    return (
        <div>
            <div className="flex bg-[#1c1a1a] p-1 gap-z-1 rounded-full max-w-max">
                <button 
                className={`${accountType==="student"
            ? "bg-black text-white rounded-full py-2 px-5"
            :" bg-transparent text-orange py-2 px-5 rounded-full transition-all duration-200 text-[#b3b1a4]"
            }`}
                onClick={()=>{setAccountType("student")}}>
                    Student
                </button>
                <button 
                  className={`${accountType==="instructor"
                  ? "bg-black text-white rounded-full py-2 px-5"
                  :" bg-transparent text-orange py-2 px-5 rounded-full transition-all duration-200 text-[#b3b1a4]"
                  }`}
                onClick={()=>{setAccountType("instructor")}}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex flex-row gap-x-10 mt-[10px]">
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">First Name</p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                        />
                    </label>
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Last Name</p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                        />
                    </label>
                </div>
               <div className="mt-[20px]">
               <label >
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email Address<sup className="text-[#c40e1a]">*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                        className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                    />
                </label>
               </div>
                <div className="w-full flex gap-x-10 mt-[20px]">
                <label className="w-full relative">
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Create Password<sup className="text-[#c40e1a]">*</sup></p>
                        <input
                            required
                            type={showPassword?("text"):("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                        />
                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={()=>setShowPassword((prev)=>!prev)}>
                            {
                                showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Confirm Password<sup className="text-[#c40e1a]">*</sup></p>
                        <input
                            required
                            type={showConfirmPassword?("text"):("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className="bg-[#1c1a1a] rounded-[0.5rem] text-white w-full p-[12px]"
                        />
                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={()=>setshowConfirmPassword((prev)=>!prev)}>
                            {
                                showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>
                </div>
                <button className="w-full bg-[#fae505] rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-5">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;