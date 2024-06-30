const Pagination = ({page, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior : "smooth",
            top : 0,
        })
    }

    const penghandelNext = () => {
        setPage ((prevState) => prevState + 1)
        scrollTop()


    }
    const penghandePrev = () => {
        if (page >1){
        setPage ((prevState) => prevState - 1)
        scrollTop()
        }

        



    }

    return (
        <div className="flex justify-center items-center py-4 gap-4 px-2 font-bold">
        <button className="transition all hover:text-blue-500 " onClick={penghandePrev}>Prev</button>
        <p>{page} of 1000 </p>
        <button className="transition all hover:text-blue-500" onClick={penghandelNext}>Next</button>
        
        </div>
    )
}

export default Pagination