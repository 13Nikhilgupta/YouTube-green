import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChannelCard, Videos } from "./exportComponents";
import { useParams } from "react-router-dom";
import { API_Call } from "../utils/API_Call";

function ChannelDetail() {

    const [videos, setvideos] = useState([]);
    const [channelDetail, setChannelDetail] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        API_Call(`search?channelId=${id}&part=snippet&order=date&type=video`).then(data => setvideos(data.items));
        API_Call(`channels?id=${id}&part=snippet`).then(data => setChannelDetail(data.items));
    }, [id]);

    return (
        <Box height='95vh'>
            <Box>
                <div className="channel-banner" />
                <ChannelCard item={channelDetail[0]} margin='-110px auto 0' />
            </Box>
            <Videos videos={videos} />
        </Box>
    );
}
export default ChannelDetail;