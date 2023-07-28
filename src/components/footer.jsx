import React from "react";
import {AiFillFacebook,AiFillTwitterSquare,AiFillGithub} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"


export default function Footer(){
    return(
        <div className="p-8 bg-[#2699fb]">
            <div className="md:flex align-center  md:gap-[100px] max-w-[1240px] mx-auto">

                <div className="md:w-[450px] mb-4">
                    <h1 className="text-bold text-[40px]">Chetan</h1>
                    <p className="text-white mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illo perferendis debitis cum cupiditate facere maxime, in inventore.</p>
                    <div className="flex mt-4 gap-[50px]">
                    <AiFillFacebook className="text-white w-[30px] h-[30px]"/>
                    <BsInstagram className="text-white  w-[30px] h-[30px]"/>
                    <AiFillTwitterSquare className="text-white  w-[30px] h-[30px]"/>
                    <AiFillGithub className="text-white  w-[30px] h-[30px]"/>
                    </div>
                </div>

                <div>
                    <h1 className="text-bold text-[20px] mt-3 mb-1">Solutions</h1>
                    <p className="text-white">Analytics</p>
                    <p className="text-white">Marketing</p>
                    <p className="text-white">Commerce</p>
                    <p className="text-white">Insights</p>
                </div>

                <div>
                <h1 className="text-bold text-[20px]  mt-3 mb-1">Support</h1>
                    <p className="text-white">Pricing</p>
                    <p className="text-white">Documentation</p>
                    <p className="text-white">Guides</p>
                    <p className="text-white">API Status</p>
                </div>

                <div>
                <h1 className="text-bold text-[20px]  mt-3 mb-1">Company</h1>
                    <p className="text-white">About</p>
                    <p className="text-white">Blog</p>
                    <p className="text-white">Job</p>
                    <p className="text-white">Press</p>
                    <p className="text-white">Careers</p>

                </div>
            </div>
        </div>
    )
}