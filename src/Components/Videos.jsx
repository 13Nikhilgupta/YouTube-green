import { Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./exportComponents";

function Videos({videos, Direction}) {
    return(
        <Stack direction= {Direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2}>
            {videos.map((video , index) => <>{video.id.videoId && <VideoCard key={index} item={video}/>}
                {video.id.channelId && <ChannelCard key={index} item={video}/>}</>
            )}
        </Stack>
    );
}

export default Videos;