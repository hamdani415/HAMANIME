"use client"
import { useState } from "react"
import YouTube from "react-youtube"


const Videotrailer = ({ytId}) =>{
    const [buka ,setbuka] = useState(true)

    const tombolbukatutup = () =>{
        setbuka((prevState)=> !prevState)
    }


    const opsion ={
        width : "300",
        height : "250"

    }

    const Mulai = () => {
      return (  <div className="fixed bottom-4 right-3">
        <button 
        onClick={tombolbukatutup}
        className="bg-blue-500 text-white px-3 mb-1 float-right">X</button>
        <YouTube videoId={ytId} onReady={(event) => event.target.pauseVideo()}
            opts={opsion}/>
    </div>
      )

    }


    return buka? <Mulai/> : <button onClick={tombolbukatutup} className="
    p-3
    bg-blue-500 text-white fixed bottom-4 right-5 w-32 text-xl transition-all shadow-xl hover:bg-black 
    
    
    ">TONTON TRAILER</button>
}

export default Videotrailer