import React, { useEffect, useState } from "react";
import { API_Call } from "../utils/API_Call";
import { Box, Typography } from "@mui/material";
import {Videos} from "./exportComponents";
import { useParams } from "react-router-dom";

function SearchFeed() {

    const [videos, setvideos] = useState([]);

    const {searchTerm} = useParams();

    useEffect(() => {
        API_Call(`search?part=snippet&q=${searchTerm}`).then(data => setvideos(data.items));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ height: '90vh', flex: '2', overflowY: 'auto' }}>
            <Typography
                variant="h4"
                fontWeight="Bold"
                mb="2px"
                sx={{ color: 'white' }}>
                Search Results for: <span style={{ color: 'limegreen' }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;