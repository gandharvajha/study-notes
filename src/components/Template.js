import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 overflow-y-hidden md:flex-col sm:flex-col lg:flex-row md:items-center sm:items-center lg:items-start">
            <div className="w-11/12  max-w-[450px] mt-8 sm:w-[91%]">
                <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-white text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-[#848c86]">{desc1} </span>
                    <br/>
                    <span className="text-[#7d7e8c] italic">{desc2}</span>
                </p>
                {
                    formType === "signup" ?
                        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                {/* <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-[#7d7e8c]"></div>
                    <p className="text-[#7d7e8c] font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-[#7d7e8c]"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#7d7e8c] px-[12px] py-[8px] gap-x-2 mt-6 signup">
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button> */}

            </div>
            <div className="relative w-11/12 max-w-[450px]  mt-8 sm:w-[91%]">
                <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy"
                />
                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className="absolute -top-4 right-4"
                />
            </div>
        </div>
    )
}
export default Template;
