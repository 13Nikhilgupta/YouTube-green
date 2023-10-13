import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { API_Call } from "../utils/API_Call";
import {Videos} from "./exportComponents";

function VideoDetail() {

    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [recommendedVideo, setRecommendedVideo] = useState([]);

    useEffect(() => {
        API_Call(`videos?id=${id}&part=snippet,statistics`).then(data => setVideo(data.items[0]));
        API_Call(`search?part=snippet&type=video&relatedToVideoId=${id}`).then(data => setRecommendedVideo(data.items));
    }, [id]);

    if (!video?.snippet) return "Loading..."

    const {snippet:{channelId, title, channelTitle}, statistics:{viewCount, likeCount}} = video;

    return (
        <Box height='92vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box width='100%' p={1}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                    <Typography color='white' variant="h5" p={2} fontWeight="bold">{title}</Typography>
                    <Stack direction='row' justifyContent='space-between' px={2} color="white">
                        <Link to={`/youtube-g/channel/${channelId}`}>
                            <Typography variant='subtitle1' fontWeight='bold' color='white'>{channelTitle}</Typography>
                        </Link>
                        <Stack direction='row' gap='20px' alignItems='center' sx={{opacity:'0.6'}}>
                            {viewCount && <Typography>{parseInt(viewCount).toLocaleString()} Views</Typography>}
                            {likeCount && <Typography>{parseInt(likeCount).toLocaleString()} Likes</Typography>}
                        </Stack>
                    </Stack>
                </Box>
                <Box px={1} py={{xs:5, md:1}} sx={{height:'92vh', width:'500px', overflowY:'auto'}}>
                    <Videos videos={recommendedVideo} Direction='column'/>
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;