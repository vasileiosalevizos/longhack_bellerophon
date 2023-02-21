import React from "react";
import { BottomMenu, Header } from "../../Component";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { TabMenu, Accordion } from "../../Component";

import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
const Medical = () => {
  return (
    <Grid
      container
      backgroundColor="#ffe6e6"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid item xs={11.5} md={12} mb="80px">
        <Header />
        <Grid item md={12} sx={{ mt:"80px",display: "flex", justifyContent: "center" }}>
          <TabMenu />
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Search
          </Typography>
          <TextField
            sx={{
              width: { md: "50%", xs: "100%" },
              backgroundColor: "white",
            }}
            required
            fullWidth
            placeholder="Search"
          />
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Accordion />
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            mt: "10px",
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
          }}
        >
          <BottomMenu  home  summary  />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Medical;
