"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import Animelist from "@/components/Animelist"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const yolo = async () => {
        // const populerAnime = await dapatAnime("top/anime?", `page=${page}`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const populerAnime = await response.json()
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        yolo()
    }, [page])

    return (
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
            <Animelist api={topAnime} />
            <Pagination page={page} setPage={setPage} />

        </>
    )
}

export default Page