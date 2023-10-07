import Loadingcomp from "./components/loading-componnet"
import Terms from "./components/terms"
import React from "react"
import { useState, useEffect } from "react"
export default function Agreement(){
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
      ):(
        <Terms/>
      )
     }
       
    </div>
    )
}