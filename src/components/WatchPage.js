import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <div className="p-4 m-4 shadow-md">
            <div className="flex">
                <div className="w-9/12">
                    <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="w-3/12 ml-3 flex-col-reverse">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage;