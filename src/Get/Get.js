export const dapatAnime = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

// export const rekomendasiAnime = async (resource, query) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
//     const anime = await response.json()
//     return anime
// }

// export const rekomendasi = async (resource, objectProperty ) => {
//     const response = await rekomendasi (resource)
//     return response.data.flatMap (item => item.entry)
// }