import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const date = new Date();
  return (
    <Box component="footer" py={2}>
      <Typography variant="body2">
        copyright &copy; {date.getFullYear()} Daily Goals Made by ❤
      </Typography>
    </Box>
  );
};

export default Footer;
