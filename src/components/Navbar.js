import React, { useState } from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>
            <nav>
                <ul className="text-white flex gap-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login">
                    <button className="bg-[#383d3a] text-white py-[8px] px-[12px] rounded-[8px] border-[#383d3a]">Log in</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Sign Up");
                    }} className="bg-[#383d3a] text-white py-[8px] px-[12px] rounded-[8px] border-[#383d3a]">Sign up</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className="bg-[#383d3a] text-white py-[8px] px-[12px] rounded-[8px] border-[#383d3a]">Log Out</button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/dashboard">
                    <button className="bg-[#383d3a] text-white py-[8px] px-[12px] rounded-[8px] border-[#383d3a]">Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;