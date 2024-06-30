
import { dapatAnime } from "@/Get/Get";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = params

  const dekode = decodeURI (keyword)
  console.log({dekode})

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${dekode}`)
  const searchAnime = await dapatAnime ( 'anime', `q=${dekode}`)
  return (
    <>
      <section>
        <Header title={`pencarian untuk ${dekode}...`} />
        <Animelist api={searchAnime} />


      </section>
    </>





  )
}

export default Page