import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ item: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width:'358px', boxShadow:'none', borderRadius:0 }}>
            <Link to={'/youtube-g/video/' + videoId}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    sx={{ height: '180px', width: '358px' }}
                />
            </Link>
            <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
                <Link to={'/youtube-g/video/' + videoId}>
                    <Typography variant="subtitle1" fontWeight="bold" color="white">{snippet.title.slice(0,50)}</Typography>
                </Link>
                <Link to={'/youtube-g/channel/' + snippet.channelId}>
                    <Typography variant="subtitle2" fontWeight="bold" color="grey">{snippet.channelTitle}</Typography>
                </Link>
            </CardContent>
        </Card>
    );
}

export default VideoCard;

