const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const{ thumbnails} = snippet;
    return (
        <div className="shadow-md p-3 m-3 max-w-60">
            <img src={thumbnails?.medium?.url} />
            <h1>{snippet?.title}</h1>
            <h2>{snippet?.channelTitle}</h2>
            <h6>{statistics?.viewCount} Views</h6>
        </div>
    )
}

//HOC
export const AdVideoCard = (VideoCard) => {
    return (props) => {
        return (
            <div className="border border-red-600">
                <VideoCard {...props} />
            </div>
        )
    }
}

export default VideoCard;