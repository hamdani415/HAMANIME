import Image from "next/image"
import Link from "next/link"

const Animelist = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime , index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer"
                    key={index}>
                        <Image src={anime.images.webp.image_url} alt="" width={350} height={350} />
                        <h3 className="font-bold md:text-xl text-md p-4 hover:text-blue-500 transition-all" >{anime.title}</h3>

                    </Link>
                )
            })}

        </div>
    )
}
export default Animelist