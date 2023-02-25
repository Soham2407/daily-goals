import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Box
      component="header"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography variant="h3">{title}</Typography>
      <TextField label="Search" id="standard-size-normal" variant="standard" />
    </Box>
  );
};

export default Header;
