import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <div className="w-6/12 p-4 m-4 shadow-md">
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;