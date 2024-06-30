import Link from "next/link"
const Header =({title, linkhref, linktitle}) => {
    return (
        <div className=" flex justify-between p-4 item-center" >
        <h1 className="text-2xl font-bold">{title}</h1>
        
        {linkhref && linktitle
        ?
        <Link href={linkhref} className="md:text-xl text md underline hover:text-indigo-500 transition-all"
        >{linktitle}</Link>
        :
        null

        }
      </div>

    )
}

export default Header