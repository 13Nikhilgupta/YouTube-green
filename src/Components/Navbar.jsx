import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <Stack
            direction="row"
            p={2}
            alignItems="center"
            sx={{ background: '#000', position: 'sticky', top: 0, justifyContent: 'space-between' }}
        >
            <Link to='/youtube-g'>
                <img src="https://assets.stickpng.com/images/627b94845a3e2ac874a7573d.png" alt="logo" height="45px"/>
            </Link>
            <SearchBar/>
        </Stack>
    );
}

export default Navbar;