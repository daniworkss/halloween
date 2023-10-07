import { ClipLoader } from "react-spinners"
import Image from "next/image"
import React from "react"
export default function Loadingcomp(){
  return(
    <div className="relative">
        <div className="absolute top-[6rem] flex justify-center w-full">
        <ClipLoader color="#989898" size={25}/>
        </div>
          <Image src={'logo.svg'}  alt='logo' width={250} height={250}/>
      </div>
  )
}