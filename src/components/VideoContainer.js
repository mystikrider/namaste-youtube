import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const[videoList, setVideoList] = useState([])
    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const response = await data?.json();
        console.log(response?.items);
        setVideoList(response?.items)
    }

    const WithBorder = AdVideoCard(VideoCard);

    return (
        <div className="flex flex-wrap">
            {videoList?.map((video) => <Link to={"/watch?v=" + video.id} key={video?.id}><VideoCard info={video} /></Link>)}
            
        </div>
    )
}

export default VideoContainer;