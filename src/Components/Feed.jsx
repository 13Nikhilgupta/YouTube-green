import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Categories, Videos } from "./exportComponents";
import { API_Call } from "../utils/API_Call";

function Feed() {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        API_Call(`search?part=snippet&q=${selectedCategory}`).then(data => setvideos(data.items));
    }, [selectedCategory]);

    return (
        <Stack
            sx={{ flexDirection: { sm: "column", md: "row" } }}>
            <Box
                sx={{ height: { sm: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sm: 0, md: 2 } }}>
                <Categories
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                <Typography
                    variant="body2"
                    className="copyright"
                    sx={{ color: "#fff", mt: '1.5px' }}>
                    Copyright {new Date().getFullYear()} @ Nikhil Gupta
                </Typography>
            </Box>
            <Box p={2} sx={{height:'90vh', flex:'2', overflowY:'auto'}}>
                <Typography
                    variant="h4"
                    fontWeight="Bold"
                    mb="2px"
                    sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: 'limegreen' }}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;