import { Paper, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const GoaItem = () => {
  return (
    <Paper sx={{ mt: 1 }} elevation={3}>
      <Box sx={{ display: "flex", p: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1">Task 1</Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            unde.
          </Typography>
        </Box>
        <DeleteIcon sx={{ color: "red", cursor: "pointer" }} />
      </Box>
    </Paper>
  );
};

export default GoaItem;
