import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ChannelCard({ item, margin}) {
    return ( 
        <Box  sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'358px', height:'286px', margin:{margin}}}>
            <Link to={`/youtube-g/channel/${item?.id?.channelId}`}>
                <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'white'}}>
                <CardMedia
                    image={item?.snippet?.thumbnails?.high?.url}
                    sx={{ height: '180px', width: '180px', borderRadius:'50%', mb:2, border:'1px solid limegreen'}}
                />
                    <Typography variant="h6">{item?.snippet.title}</Typography>
                    {item?.statistics && <Typography>{parseInt(item?.statistics.subscriberCount).toLocaleString()} Subscribers</Typography>}
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelCard;