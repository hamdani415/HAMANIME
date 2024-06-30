
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { dapatAnime, rekomendasi } from "@/Get/Get";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?Limit=15`)
  const topAnime = await dapatAnime("top/anime", "limit=25")

  // let rekomendasiAnime = await rekomendasi("recommendations/anime", "entry")
  // rekomendasiAnime = {data: rekomendasiAnime}
  // console.log(rekomendasiAnime)

  return (
    <>
     <section>
      <Header title={"PALING POPULER"} linktitle={"Lihat semua"} linkhref={"/populer"}/>
      <Animelist api={topAnime} />
    </section>
     {/* <section>
      <Header title={"REKOMENDASI"} linktitle={"Lihat semua"} linkhref={"/populer"}/>
      <Animelist api={rekomendasiAnime} />
    </section> */}
    </>
  



  )
}

export default Page