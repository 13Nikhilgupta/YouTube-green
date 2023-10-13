import React, { useState } from "react";
import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/youtube-g/search/${searchTerm}`);
            setSearchTerm("");
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ borderRadius: '20px', border: '1px solid limegreen', boxShadow: 'none', pl: '15px' }}>
            <input
                className="search-bar"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }} />
            <IconButton type="submit" sx={{ p: '10px', color: 'limegreen' }}><Search /></IconButton>
        </Paper>
    );
}

export default SearchBar;