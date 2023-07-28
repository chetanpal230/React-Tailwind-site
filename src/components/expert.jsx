import React from "react";
import laptop from "../assests/laptop.jpg"

export default function Expert(){
    return (
       <div className="max-w-[1240px] p-2 mx-auto md:grid grid-cols-2">
        <div className="col-span-1 text-center md:w-[80%]">
            <img className="inline" src={laptop}/>
        </div>
        <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-[#00df9a] font-bold uppercase my-2">Learn from experts</h1>
            <p className="text-justify my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo, quos autem unde veritatis perspiciatis similique, aliquam reprehenderit nemo aperiam quas quisquam expedita omnis dolorem perferendis sapiente esse. Nam, quo.</p>
            <button className="w-[30%] bg-black text-white p-3 rounded">Get started</button>
        </div>
       </div>
    )
}