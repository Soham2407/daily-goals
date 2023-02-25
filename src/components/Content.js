import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import GoaItem from "./GoaItem";

const Content = () => {
  return (
    <Box component="main" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <form>
          <Grid container>
            <Grid item lg={8}>
              <TextField
                variant="outlined"
                size="small"
                label="Task"
                required
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item lg={8}>
              <TextField
                variant="outlined"
                multiline
                size="small"
                label="Description"
                required
                rows={4}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>

      <Box mt={2}>
        <Typography variant="h6">Goals</Typography>
        <GoaItem></GoaItem>
      </Box>
    </Box>
  );
};

export default Content;
