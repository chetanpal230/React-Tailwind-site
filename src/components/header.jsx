import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"


export default function Header(){

    const [toggle,setToggle] = useState(false)

    return(
        <div className="bg-[#2699fb] p-5">
            <div className="max-w-[1240px] py-[8px] items-center flex justify-between mx-auto">
                <div className="text-2xl font-bold">
                   Chetan
                </div>

                {toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className="cursor-pointer text-white text-xl md:hidden block"/> 
                :
                 <AiOutlineMenu onClick={() => setToggle(!toggle)} className="cursor-pointer text-white text-xl md:hidden block"/> 
                 }
                
                
                <ul className=" md:flex hidden gap-8 text-white">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resource</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className= {`duration-300 w-full h-screen md:hidden fixed bg-black top-[87px] text-white
                  ${toggle ? 'left-[0%]' : 'left-[-100%]'}`}>
                    <li className="p-5">Home</li>
                    <li className="p-5">Company</li>
                    <li className="p-5">Resource</li>
                    <li className="p-5">About</li>
                    <li className="p-5">Contact</li>
                </ul>
            </div>
        </div>
    )
}