"use client"
import { MagnifyingGlass, Placeholder } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const Input = () => {
    const nyari = useRef()
    const router = useRouter()



    const hasil = (event) => {
        const keyword = nyari.current.value
        if (!keyword) return


        if (event.key == "Enter" || event.type === "click") {
            event.preventDefault()

            router.push(`/search/${keyword}`)
        }


    }
    return (
        <div className="relative">
            <input placeholder="cari anime...."
                className="p-2 rounded w-full"
                ref={nyari}
                onKeyDown={hasil} />
            <button className="absolute top-2 end-2" onClick={hasil} >
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}
export default Input
