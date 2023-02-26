import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Header = ({ title, handleSearch, searchTerm }) => {
  return (
    <Box
      component="header"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography variant="h3">{title}</Typography>
      <TextField
        label="Search"
        id="standard-size-normal"
        variant="standard"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Box>
  );
};

export default Header;
