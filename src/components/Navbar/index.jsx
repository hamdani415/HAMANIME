import Link from "next/link"
import Input from "@/components/Navbar/Input"

const Navbar = () => {
    return (
        <header className="bg-blue-500 " >
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4 md:items-center">
                <Link className="font-bold text-white hover:text-black transition-all text-2xl  " href="/">HAMANIME</Link>
                <Input/>
                
                </div>
        </header>
    )
}
export default Navbar