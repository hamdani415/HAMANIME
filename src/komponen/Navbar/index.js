import Input from "@/src/komponen/Navbar/Input"
import Link from "next/link"

const Navbar = () => {
    return(
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="text-white font-bold text-3xl">HAMANIME</Link>
               <Input/>
            </div>
        </header>

    )
}

export default Navbar