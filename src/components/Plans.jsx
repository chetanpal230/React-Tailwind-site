import React from "react";
import double from "../assests/double.png"
import single from "../assests/single.png"
import triple from "../assests/triple.png"

export default function Plans(){
    return(
        <div className="p-[100px] px-2">
            <div className=" text-center max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">

                <div className=" shadow-xl p-[30px] md:my-4 hover:scale-105 duration-500 h-[500px]">
                <img className="m-auto mb-[15px] mb-[15px] h-[80px]" src={single} alt="" /> 
                <h1 className="text-[25px] mb-[10px] font-bold">Web Development</h1>
                <h1 className="text-[30px] mb-[10px] font-bold">$149</h1>
                <p>Lorem ipsum is simply</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dummy text of the printing</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dumm</p>
                <hr className="mb-[15px]" />
                <button className="py-3 px-8 rounded bg-[#00df9a]">Start Trial</button>
                </div>

                <div className="shadow-xl p-[30px] my-4 hover:scale-105 duration-500 bg-gray-100 h-[500px]">
                <img className="m-auto mb-[15px] mb-[15px] h-[80px]" src={double} alt="" /> 
                <h1 className="text-[25px] mb-[10px] font-bold">Digital Marketing</h1>
                <h1 className="text-[30px] mb-[10px] font-bold">$149</h1>
                <p>Lorem ipsum is simply</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dummy text of the printing</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dumm</p>
                <hr className="mb-[15px]" />
                <button className="py-3 px-8 rounded text-[#00df9a] bg-black">Start Trial</button>
                </div>

                <div className="shadow-xl p-[30px] my-4 hover:scale-105 duration-500 h-[500px]">
                <img className="m-auto mb-[15px] h-[80px]" src={triple} alt="" /> 
                <h1 className="text-[25px] mb-[10px] font-bold">App Development</h1>
                <h1 className="text-[30px] mb-[10px] font-bold">$149</h1>
                <p>Lorem ipsum is simply</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dummy text of the printing</p>
                <hr className="mb-[10px]"/>
                <p>Lorem ipsum is simply dumm</p>
                <hr className="mb-[15px]" />
                <button className="py-3 px-8 rounded bg-[#00df9a]">Start Trial</button>
                </div>

            </div>
        </div>
    )
}