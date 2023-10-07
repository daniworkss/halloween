import React from "react"
import Link from "next/link"
export default function Terms(){
    return(
        <div className="terms relative rounded  bg-white pl-4 pr-4  w-[90%] h-[400px] flex justify-center items-center">
            <p className="text-center">By clicking accept to this agreement, You accept your fate and you can not use the knowledge of this website to alter it all you will be hunted down by th demon from hell Ozhin</p>
         <div className="absolute bottom-[1rem] flex justify-center w-full">
         <Link className=" bg-black text-white font-bold w-[250px] text-center h-[60px] rounded flex items-center justify-center" href={'/game'}>Accept And Continue</Link>
         </div>
        </div>
    )
}