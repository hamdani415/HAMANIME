import Link from "next/link"

const Header = ({ title, linkhref, linktitle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkhref && linktitle ?
        <Link href={linkhref} className="text-xl underline hover:text-blue-500">{linktitle}</Link>

        : null
      }
    </div>

  )
}
export default Header