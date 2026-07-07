import { useEffect } from "react";

function useInfiniteScroll(callback, loading) {
    useEffect(() => {
        const handleScroll = () => {
            const reachedBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 200;

            if (reachedBottom && !loading) {
                callback()
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [callback, loading])
}

export default useInfiniteScroll