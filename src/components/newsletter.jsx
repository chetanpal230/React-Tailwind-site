import React from "react";

export default function Newsletter(){
    return(
        <div className="p-8 bg-[#2699fb]">
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
                <div className="m-2">
                    <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to learn latest IT skills ?</h1>
                    <span className="text-white">Sign up to our newsletter and stay up to date</span>
                </div>
                <div className="m-2">
                    <input type="text" className="sw:w-full rounded mb-2 p-3 mr-2 text-slate-300" placeholder="E-mail"/>
                    <button className="bg-black text-white p-3 rounded">Get started</button>
                    <br />
                    <p className="text-white">We care about the protection of the data. Read our <br /> <a className="text-black" href="">privacy policy.</a> </p>
                </div>
            </div>
        </div>
    )
}