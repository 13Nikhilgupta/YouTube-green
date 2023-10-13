import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constant";

function Categories({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction='row'
            sx={{ overflowY: "auto", flexDirection: { md: "column" }, height: { xs: 'auto', md: '95%' } }}>
            {categories.map(category => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    className="category-btn"
                    style={{ background: category.name === selectedCategory && 'limegreen', color: 'white' }}
                    key={category.name}>
                    <span style={{ color: category.name !== selectedCategory && 'limegreen', marginRight: '15px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
}

export default Categories;