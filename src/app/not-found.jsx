"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
    return (
        <div  className="min-h-screen max-w-xl mx-auto flex justify-centerr items- center">
            <div className="flex justify-center items-center gap-4 flex-col" >
                <FileSearch size={44} className="text-blue-500"/>
                <h3 className="text-blue-500 text-4xl font-bold">HAMDANI GANTENG</h3>
                <Link href="/" className="text-black hover:text-blue-500 transition-all underline">kembali</Link>
            </div>
        </div>

    )
}

export default Page