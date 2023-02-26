import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import GoalItem from "./GoaItem";

const Content = ({ setGoals, goals }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, task]);
    setTask({
      title: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  return (
    <Box component="main" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item sm={8} md={8} lg={8}>
              <TextField
                variant="outlined"
                size="small"
                label="Task"
                name="title"
                required
                value={task.title}
                style={{ width: "100%" }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item sm={8} md={8} lg={8}>
              <TextField
                variant="outlined"
                multiline
                size="small"
                label="Description"
                name="description"
                value={task.description}
                required
                rows={4}
                style={{ width: "100%" }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Box>
        </form>
      </Paper>

      <Box mt={2}>
        <Typography variant="h6">Goals</Typography>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            title={goal.title}
            description={goal.description}
            handleDelete={handleDelete}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Content;
