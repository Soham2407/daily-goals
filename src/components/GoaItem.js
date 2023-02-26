import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const GoalItem = ({ title, description, id, handleDelete }) => {
  return (
    <Paper sx={{ mt: 1 }} elevation={3}>
      <Box sx={{ display: "flex", p: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <DeleteIcon
          sx={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
      </Box>
    </Paper>
  );
};

export default GoalItem;
