import React from "react"
import { useEffect, useState } from "react"
import Loadingcomp from "./components/loading-componnet"
import Link from "next/link"
export default function Home(){
  const [loading, setLoading] = useState()
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },5000)
  },[])
  return(
    <div className="flex justify-center items-center w-full h-screen">
     {
      loading ?(
        <Loadingcomp/>
      ) :(
        <div className="w-full flex justify-center items-center h-screen flex-col  gap-[2rem]">
      <h2 className="text-white italic font-extrabold">Want to find out when you will die?</h2>
        <div className="buttons  flex gap-[3rem]">
          <Link href={'/agreement'} className="bg-white text-red-500 w-[50px] no-select text-center rounded h-[30px] flex justify-center items-center">YES</Link>
          <Link href={'/'} className="bg-white text-green-600 w-[50px] no-select text-center rounded h-[30px]  flex justify-center items-center">NO</Link>
        </div>
     </div>
      )
     }
    </div>
  )
}