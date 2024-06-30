import { dapatAnime } from "@/Get/Get"
import Videotrailer from "@/components/utilities/Videotrailer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await dapatAnime(`anime/${id}`)
    // console.log(anime)
    return (
        <>
            <div className="pt-4 px-4">
                <h1 className="text-2xl text-blue-500">{anime.data.title}- {anime.data.year}</h1>
                {/* <h3 className="text-2xl text-blue-500 pt-4">{anime.data.title_japanese}-{anime.data.year}</h3> */}

            </div>
            <div className=" md:pt-4 pt-7 px-4 flex md:gap-2 gap-2 sm:flex-nowrap flex-wrap text-blue-500">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"

                />
                <p className="text-black md:pt-0 pt-7 px-2 ">{anime.data.synopsis}</p>

            </div>


            <div className="pt-7 px-4 flex gap-2 overflow-x-auto">

                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>TYPE</h3>
                    <p>{anime.data.type}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3 >TOTAL EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>SCORE</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>POPULARITAS</h3>
                    <p>{anime.data.popularity}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>SOURCE</h3>
                    <p>{anime.data.source}</p>
                </div>
                <div className="w-36 flex flex-col flex justify-center items-center rounded border
                border-blue-500 p-2">
                    <h3>MEMBER</h3>
                    <p>{anime.data.members}</p>
                </div>
            </div>

            <div>
                <Videotrailer ytId={anime.data.trailer.youtube_id}/>
            </div>

        </>)
}

export default Page