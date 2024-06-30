"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

import { useRef } from "react"

const Input = () => {
    const nyari = useRef()
    const router = useRouter()

    const hasil = () => {
        event.preventDefault()
        const keyword = nyari.current.value

       router.push(`/search/${keyword}`)
    }
    return (
        <div>
            <input placeholder="cari anime..."
                className=""
                ref={nyari} />

            <button onClick={hasil}>
                <MagnifyingGlass size={32} />
            </button>
        </div>


    )
}

export default Input